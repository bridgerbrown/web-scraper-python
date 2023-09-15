import platform
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from bs4 import BeautifulSoup
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['GET', 'POST'])
def scrape():
    if request.method == 'GET':
        return "This is a GET request."
    elif request.method == 'POST':
        try:
            chrome_binary = 'chrome'
            chrome_command = [chrome_binary, '--headless', '--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox']

            browser_type = request.json.get('browser')
            element_types = request.json.get('element_types', [])
            url = request.json.get('url')

            chrome_command.append(url)

            chrome_process = subprocess.Popen(chrome_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            chrome_output, chrome_error = chrome_process.communicate()

            if chrome_process.returncode == 0:
                content = chrome_output.decode('utf-8')
                soup = BeautifulSoup(content, 'html.parser')

                heading_elements = []
                p_elements = []
                link_elements = []
                meta_elements = []
                scraped_elements = [heading_elements, p_elements, link_elements, meta_elements]

                for element_type in element_types:
                    if element_type == 'heading':
                        for level in range(1, 7):
                            for heading in soup.findAll(f'h{level}'):
                                heading_elements.append([
                                    f'h{level}',
                                    heading.get_text()
                                ])
                    elif element_type == 'paragraph':
                        for p in soup.findAll('p'):
                            p_elements.append(p.get_text())
                    elif element_type == 'link':
                        for link in soup.findAll('a'):
                            link_elements.append([link.get_text(), link.get('href')])
                        for link in soup.findAll('link'):
                            link_elements.append([link.get('rel'), link.get('href')])
                    elif element_type == 'meta':
                        for meta in soup.head.findAll('meta'):
                            meta_elements.append(meta.attrs)

                series = pd.Series(scraped_elements, name='scraped_elements')
                df = pd.DataFrame({'scraped_elements': series})
                scraped_data = df.to_dict(orient='records')

                return jsonify({
                    'message': 'Scraping successful',
                    'data': scraped_elements
                })
            else:
                return jsonify({'error': chrome_error.decode('utf-8')})

        except Exception as e:
            return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

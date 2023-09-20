import platform, pandas as pd, subprocess, os, logging, sys
from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

BASE_DIR = '/opt/render/project/.render'
STORAGE_DIR = os.path.join(BASE_DIR, 'chrome')
CHROME_BINARY = os.path.join(STORAGE_DIR, 'opt/google/chrome/chrome')
current_directory = ''

directories = [BASE_DIR, STORAGE_DIR, CHROME_BINARY]
for directory in directories:
    current_directory = os.path.join(current_directory, directory)
    if os.path.exists(current_directory):
        print(f"Directory '{current_directory}' exists.")
    else:
        print(f"Directory '{current_directory}' does not exist.")

if os.path.exists(CHROME_BINARY):
    print(f"Chrome binary '{CHROME_BINARY}' exists.")
else:
    print(f"Chrome binary '{CHROME_BINARY}' does not exist.")

formatter = logging.Formatter("[%(asctime)s] %(levelname)s in %(module)s: %(message)s")
handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(formatter)
app.logger.addHandler(handler)

app.logger.setLevel(logging.DEBUG)

@app.route('/scrape', methods=['GET', 'POST'])
def scrape():
    if request.method == 'GET':
        return "This is a GET request."
    elif request.method == 'POST':
        try:
            chrome_command = ['dbus-launch', CHROME_BINARY, '--headless', '--disable-gpu', '--disable-dev-shm-usage', '--no-sandbox']
            app.logger.info("Chrome Command: %s", chrome_command)

            element_types = request.json.get('element_types', [])
            url = request.json.get('url')

            chrome_command.append(url)
            chrome_process = subprocess.Popen(chrome_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            chrome_output, chrome_error = chrome_process.communicate()

            app.logger.info("Chrome Output: %s", chrome_output)
            app.logger.info("Chrome Error: %s", chrome_error)

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

                print("Scraped Data:")
                print(scraped_elements)

                series = pd.Series(scraped_elements, name='scraped_elements')
                df = pd.DataFrame({'scraped_elements': series})
                scraped_data = df.to_dict(orient='records')

                return jsonify({
                    'message': 'Scraping successful',
                    'data': scraped_elements
                })
            else:
                app.logger.error(str(chrome_error))
                return jsonify({'error': chrome_error.decode('utf-8')})

        except Exception as e:
            return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

import pandas as pd
import os
import logging
import sys
from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app)

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
            url = request.json.get('url')
            response = requests.get(url)

            if response.status_code == 200:
                content = response.text
                soup = BeautifulSoup(content, 'html.parser')

                element_types = request.json.get('element_types', [])
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
                app.logger.error('Failed to retrieve the web page.')
                return jsonify({'error': 'Failed to retrieve the web page.'})

        except Exception as e:
            return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

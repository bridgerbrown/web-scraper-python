import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver

app = Flask(__name__)
CORS(app)

def get_webdriver(browser_type):
    drivers_directory = 'drivers'

    if browser_type == 'chrome':
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        return webdriver.Chrome(options=options)
    elif browser_type == 'firefox':
        geckodriver_path = os.path.join(drivers_directory, 'geckodriver')
        options = webdriver.FirefoxOptions()
        options.add_argument('--headless')
        return webdriver.Firefox(executable_path=geckodriver_path, options=options)
    elif browser_type == 'ie':
        iedriver_path = os.path.join(drivers_directory, 'iedriver')
        return webdriver.Ie(executable_path=iedriver_path)
    else:
        raise Exception(f"Unsupported browser type: {browser_type}")


@app.route('/scrape', methods=['GET', 'POST'])
def scrape():
    if request.method == 'GET':
        return "This is a GET request."
    elif request.method == 'POST':
        try:
            browser_type = request.json.get('browser')
            driver = get_webdriver(browser_type)
            
            url = request.json.get('url')
            driver.get(url)

            element_types = request.json.get('element_types', [])

            heading_elements = []
            p_elements = []
            link_elements = []
            meta_elements = []
            scraped_elements = [heading_elements, p_elements, link_elements, meta_elements]

            content = driver.page_source
            soup = BeautifulSoup(content, 'html.parser')

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
        except Exception as e:
            return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()

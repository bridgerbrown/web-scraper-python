import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver

app = Flask(__name__)
CORS(app)

def get_webdriver(browser_type):
    os_name = os.name

    if browser_type == 'chrome':
        if os_name == 'linux':
            chrome_driver_filename = 'chromedriver-linux'
        elif os_name == 'darwin':
            if platform.machine() == 'x86_64':
                chrome_driver_filename = 'chromedriver-mac-x64'
            elif platform.machine() == 'arm64':
                chrome_driver_filename = 'chromedriver-mac-arm64'
            else:
                raise Exception("Unsupported macOS architecture")
        elif os_name == 'windows':
            if platform.architecture()[0] == '64bit':
                chrome_driver_filename = 'chromedriver-win64.exe'
            else:
                chrome_driver_filename = 'chromedriver-win32.exe'
        else:
            raise Exception(f"Unsupported operating system: {os_name}")
        
        chrome_driver_path = f'/opt/render/project/.render/chrome/{chrome_driver_filename}'
        return webdriver.Chrome(executable_path=chrome_driver_path)
    elif browser_type == 'firefox':
        options = webdriver.FirefoxOptions()
        options.add_argument('--headless')
        return webdriver.Firefox(options=options)
    elif browser_type == 'ie':
        return webdriver.Ie()
    elif browser_type == 'safari':
        return webdriver.Safari()
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
    app.debug = True
    app.run(host='0.0.0.0', port=5000)

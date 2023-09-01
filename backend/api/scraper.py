import json
import requests
from http.server import BaseHTTPRequestHandler
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.common.exceptions import WebDriverException

app = Flask(__name__)
CORS(app)

class Handler(BaseHTTPRequestHandler):

    def do_POST(self):
        try:
            content_length = int(self.headers['Content-Length'])
            request_data = self.rfile.read(content_length).decode('utf-8')
            request_json = json.loads(request_data)

            browser_type = request_json.get('browser')

            if browser_type == 'chrome':
                options = Options()
                options.add_argument('--headless')
                driver = webdriver.Chrome(options=options)
            elif browser_type == 'firefox':
                options = FirefoxOptions()
                options.add_argument('--headless')
                driver = webdriver.Firefox(options=options)
            elif browser_type == 'safari':
                driver = webdriver.Safari()
            elif browser_type == 'ie':
                capabilities = DesiredCapabilities.INTERNETEXPLORER.copy()
                capabilities['ignoreProtectedModeSettings'] = True
                driver = webdriver.Ie(capabilities=capabilities)

            url = request_json.get('url')
            driver.get(url)

            element_types = request_json.get('element_types', [])

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

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()

            response_data = {
                'message': 'Scraping successful',
                'data': scraped_elements
            }

            self.wfile.write(json.dumps(response_data).encode('utf-8'))

        except requests.exceptions.RequestException as req_err:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_response = {'error': f'Request error: {str(req_err)}'}
            self.wfile.write(json.dumps(error_response).encode('utf-8'))

        except WebDriverException as wd_err:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_response = {'error': f'WebDriver error: {str(wd_err)}'}
            self.wfile.write(json.dumps(error_response).encode('utf-8'))

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_response = {'error': str(e)}
            self.wfile.write(json.dumps(error_response).encode('utf-8'))

if __name__ == '__main__':
    app.run()


from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape():
    try:
        driver = webdriver.Chrome()
        driver.get('http://localhost:3000/')

        element_types = request.json.get('element_types', [])

        heading_elements = []
        p_elements = []
        link_elements = []
        image_elements = []
        scraped_elements = [heading_elements, p_elements, link_elements, image_elements]

        content = driver.page_source
        soup = BeautifulSoup(content, 'html.parser')

        for element_type in element_types:
            if element_type == 'heading':
                for heading in soup.findAll(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
                    heading_elements.append(heading.get_text())
            elif element_type == 'paragraph':
                for p in soup.findAll('p'):
                    p_elements.append(p.get_text())
            elif element_type == 'link':
                for link in soup.findAll('a'):
                    link_elements.append(a.get_text())
            elif element_type == 'image':
                for image in soup.findAll('img'):
                    image_elements.append(img.get_text())

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


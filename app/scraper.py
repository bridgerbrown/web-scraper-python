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

        results = []
        other_results = []

        content = driver.page_source
        soup = BeautifulSoup(content, 'html.parser')

        for p_element in soup.findAll('p'):
            p_text = p_element.get_text()
            if p_text not in other_results:
                other_results.append(p_text)

        series1 = pd.Series(results, name='Names')
        series2 = pd.Series(other_results, name='Categories')
        df = pd.DataFrame({'Names': series1, 'Categories': series2})
        scraped_data = df.to_dict(orient='records')

        return jsonify({'message': 'Scraping successful', 'data': scraped_data})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()


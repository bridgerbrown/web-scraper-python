import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://nextjs.org/docs')

results = []
other_results = []

content = driver.page_source
soup = BeautifulSoup(content, 'html.parser')

for a in soup.findAll(attrs={'id': 'what-is-nextjs'}):
    name = a.find('a') 
    if name not in results:
        results.append(name.text)

for p_element in soup.findAll('p'):
    p_text = p_element.get_text()
    if p_text not in other_results:
        other_results.append(p_text)

series1 = pd.Series(results, name='Names')
series2 = pd.Series(other_results, name='Categories')
df = pd.DataFrame({'Names': series1, 'Categories': series2})
df.to_csv('names.csv', index=False)



import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://nextjs.org/docs')

results = []

content = driver.page_source
soup = BeautifulSoup(content, 'html.parser')

for element in soup.findAll(attrs={'id': 'what-is-nextjs'}):
    name = element.find('a') 
    if name not in results:
        results.append(name.text)

df = pd.DataFrame({'Names': results})
df.to_excel('names.xlsx', index=False)

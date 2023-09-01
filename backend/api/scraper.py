import os
import platform
import requests
import zipfile
from pathlib import Path
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.ie.service import Service as IEService
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.common.exceptions import WebDriverException, SessionNotCreatedException

app = Flask(__name__)
CORS(app)

def download_chromedriver():
    system_platform = platform.system()

    if system_platform == "Linux":
        chromedriver_url = f"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/linux64/chromedriver-linux64.zip"
    elif system_platform == "Darwin":
        machine = platform.machine()
        if machine == "arm64":
            chromedriver_url = f"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/mac-arm64/chromedriver-mac-arm64.zip"
        else:
            chromedriver_url = f"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/mac-x64/chromedriver-mac-x64.zip"
    elif system_platform == "Windows":
        architecture = platform.architecture()[0]
        if architecture == "32bit":
            chromedriver_url = f"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/win32/chromedriver-win32.zip"
        elif architecture == "64bit":
            chromedriver_url = f"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/win64/chromedriver-win64.zip"
        else:
            chromedriver_url = f"https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/win64/chromedriver-win64.zip"
    else:
        raise Exception(f"Unsupported platform: {system_platform}")

    temp_dir = '/tmp/chromedriver'
    os.makedirs(temp_dir, exist_ok=True)

    chromedriver_path = os.path.join(temp_dir, "chromedriver")
    if not os.path.exists(chromedriver_path):
        response = requests.get(chromedriver_url)
        if response.status_code == 200:
            with open(os.path.join(chromedriver_dir, "chromedriver.zip"), "wb") as f:
                f.write(response.content)
            with zipfile.ZipFile(os.path.join(chromedriver_dir, "chromedriver.zip"), "r") as zip_ref:
                zip_ref.extractall(chromedriver_dir)
            os.remove(os.path.join(chromedriver_dir, "chromedriver.zip"))
            os.chmod(chromedriver_path, 0o755)  # Make the file executable
        else:
            raise Exception(f"Failed to download ChromeDriver: {response.status_code}")

    return chromedriver_path

def download_geckodriver():
    geckodriver_version = "0.33.0"
    system_platform = platform.system()

    if system_platform == "Linux":
        geckodriver_url = f"https://github.com/mozilla/geckodriver/releases/download/v{geckodriver_version}/geckodriver-v{geckodriver_version}-linux64.tar.gz"
    elif system_platform == "Darwin":
        geckodriver_url = f"https://github.com/mozilla/geckodriver/releases/download/v{geckodriver_version}/geckodriver-v{geckodriver_version}-macos.tar.gz"
    elif system_platform == "Windows":
        geckodriver_url = f"https://github.com/mozilla/geckodriver/releases/download/v{geckodriver_version}/geckodriver-v{geckodriver_version}-win64.zip"
    else:
        raise Exception(f"Unsupported platform: {system_platform}")

    temp_dir = '/tmp/geckodriver'
    os.makedirs(temp_dir, exist_ok=True)

    geckodriver_path = os.path.join(temp_dir, "geckodriver")
    if not os.path.exists(geckodriver_path):
        response = requests.get(geckodriver_url)
        if response.status_code == 200:
            with open(os.path.join(geckodriver_dir, "geckodriver.zip"), "wb") as f:
                f.write(response.content)
            if system_platform == "Windows":
                import zipfile
                with zipfile.ZipFile(os.path.join(geckodriver_dir, "geckodriver.zip"), "r") as zip_ref:
                    zip_ref.extractall(geckodriver_dir)
            else:
                import tarfile
                with tarfile.open(os.path.join(geckodriver_dir, "geckodriver.tar.gz"), "r:gz") as tar_ref:
                    tar_ref.extractall(geckodriver_dir)
            os.remove(os.path.join(geckodriver_dir, "geckodriver.zip"))
            os.chmod(geckodriver_path, 0o755)

    return geckodriver_path

def download_iedriver():
    system_architecture = platform.architecture()[0]

    if system_architecture == "32bit":
        iedriver_url = f"https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.11.0/IEDriverServer_Win32_4.11.0.zip"
    elif system_architecture == "64bit":
        iedriver_url = f"https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.11.0/IEDriverServer_x64_4.11.0.zip"
    else:
        raise Exception(f"Unsupported system architecture: {system_architecture}")

    temp_dir = '/tmp/iedriver'
    os.makedirs(temp_dir, exist_ok=True)

    iedriver_path = os.path.join(temp_dir, "IEDriverServer.exe")
    if not os.path.exists(iedriver_path):
        response = requests.get(iedriver_url)
        if response.status_code == 200:
            with open(os.path.join(iedriver_dir, "iedriver.zip"), "wb") as f:
                f.write(response.content)
            import zipfile
            with zipfile.ZipFile(os.path.join(iedriver_dir, "iedriver.zip"), "r") as zip_ref:
                zip_ref.extractall(iedriver_dir)
            os.remove(os.path.join(iedriver_dir, "iedriver.zip"))

    return iedriver_path


def get_webdriver(browser_type):
    if browser_type == 'chrome':
        chromedriver_path = download_chromedriver()
        service = ChromeService(executable_path=chromedriver_path)
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        return webdriver.Chrome(service=service, options=options)
    elif browser_type == 'firefox':
        geckodriver_path = download_geckodriver()
        service = FirefoxService(executable_path=geckodriver_path)
        options = webdriver.FirefoxOptions()
        options.add_argument('--headless')
        return webdriver.Firefox(service=service, options=options)
    elif browser_type == 'safari':
        try:
            driver = webdriver.Safari()
        except SessionNotCreatedException:
            return jsonify({'error': 'Safari WebDriver is not enabled.'})
    elif browser_type == 'ie':
        iedriver_path = download_iedriver()
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
        except requests.exceptions.RequestException as req_err:
            return jsonify({'error': f'Request error: {str(req_err)}'})
        except WebDriverException as wd_err:
            return jsonify({'error': f'WebDriver error: {str(wd_err)}'})
        except Exception as e:
            return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()

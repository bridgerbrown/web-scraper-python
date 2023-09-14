#!/usr/bin/env bash
set -o errexit
export PATH="${PATH}:/opt/render/web-scraper-python-server/.render/chrome/opt/google/chrome"
cd ./api  
python scraper.py

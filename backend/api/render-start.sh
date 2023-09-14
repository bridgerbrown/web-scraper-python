#!/usr/bin/env bash
set -o errexit
export PATH="${PATH}:/opt/render/project/.render/chrome/chrome-linux64"
cd ./api  
python scraper.py

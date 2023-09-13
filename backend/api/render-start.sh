#!/usr/bin/env bash
set -o errexit
export PATH="${PATH}:/opt/render/project/.render/chrome/opt/google/chrome"
cd ./api  
python scraper.py

#!/usr/bin/env bash
set -o errexit
export PATH="${PATH}:/opt/render/project/.render/google-chrome-stable_current_amd64/data/opt/google/chrome"
cd ./api  
python scraper.py

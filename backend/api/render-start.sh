echo "Current working directory after pip install: $(pwd)"
export PATH="${PATH}:/opt/render/project/.render/chrome/opt/google/chrome"
echo "Current working directory before running the script: $(pwd)"
cd ./backend/api
python ./scraper.py

#!/usr/bin/env bash
# exit on error
set -o errexit

STORAGE_DIR=/opt/render/web-scraper-python-server/.render

# if [[ ! -d $STORAGE_DIR/chrome ]]; then
  echo "...Downloading Chrome"
  mkdir -p $STORAGE_DIR/chrome
  cd $STORAGE_DIR/chrome
  wget -P ./ https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  dpkg -x ./google-chrome-stable_current_amd64.deb $STORAGE_DIR/chrome
  ls -l /opt/render/web-scraper-python-server/.render/chrome/opt/google/chrome
  rm ./google-chrome-stable_current_amd64.deb
  echo "Current working directory: $(pwd)"
  cd $HOME
  echo "Changed directory: $(pwd)"
  cd ../../
  echo "Changed directory: $(pwd)"
  cd /backend
  echo "Changed directory: $(pwd)"
#else
#  echo "...Using Chrome from cache"
#fi

pip install -r requirements.txt

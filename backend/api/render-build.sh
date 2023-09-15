#!/usr/bin/env bash
# exit on error
set -o errexit

STORAGE_DIR=/opt/render/project/.render

if [[ ! -d $STORAGE_DIR/chrome ]]; then
  echo "Current working directory: $(pwd)"
  echo "...Downloading Chrome"
  mkdir -p $STORAGE_DIR/chrome
  echo "Current working directory: $(pwd)"
  cd $STORAGE_DIR/chrome
  wget -P ./ https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  dpkg -x ./google-chrome-stable_current_amd64.deb $STORAGE_DIR/chrome
  rm ./google-chrome-stable_current_amd64.deb
  echo "Current working directory: $(pwd)"
else
  echo "...Using Chrome from cache"
fi

cd $HOME/project/src/backend
echo "Current working directory: $(pwd)"

pip install -r requirements.txt

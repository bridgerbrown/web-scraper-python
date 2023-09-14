#!/usr/bin/env bash
# exit on error
set -o errexit

STORAGE_DIR=/opt/render/project/.render

if [[ ! -d $STORAGE_DIR/chrome ]]; then
  echo "...Downloading Chrome"
  mkdir -p $STORAGE_DIR/chrome
  cd $STORAGE_DIR/chrome
  wget -P ./ https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/117.0.5938.62/linux64/chrome-linux64.zip
  dpkg -x ./chrome-linux64.zip $STORAGE_DIR/chrome
  rm ./chrome-linux64.zip
  cd $HOME/backend 
else
  echo "...Using Chrome from cache"
fi

pip install -r requirements.txt
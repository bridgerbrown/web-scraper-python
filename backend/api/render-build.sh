#!/usr/bin/env bash
# exit on error
set -o errexit

STORAGE_DIR=/opt/render/project/.render

if [[ ! -d $STORAGE_DIR/chrome ]]; then
  echo "...Downloading Chrome"
  mkdir -p $STORAGE_DIR/chrome
  cd $STORAGE_DIR/chrome
  wget -P ./ https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/117.0.5938.62/mac-arm64/chrome-mac-arm64.zip 
  dpkg -x ./chrome-mac-arm64.zip $STORAGE_DIR/chrome
  rm ./chrome-mac-arm64.zip
  cd $HOME/backend 
else
  echo "...Using Chrome from cache"
fi

pip install -r requirements.txt

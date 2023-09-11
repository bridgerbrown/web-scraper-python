#!/usr/bin/env bash
# exit on error
set -o errexit

STORAGE_DIR=/opt/render/project/.render

if [[ ! -d $STORAGE_DIR/chrome ]]; then
  echo "...Downloading Chrome"
  mkdir -p $STORAGE_DIR/chrome
  cd $STORAGE_DIR/chrome

  if [[ "$(uname -s)" == "Linux" ]]; then
    wget -P ./ https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/linux64/chrome-linux64.zip
    dpkg -x ./chrome-linux64.zip $STORAGE_DIR/chrome
    rm ./chrome-linux64.zip 
  elif [[ "$(uname -s)" == "Darwin" ]]; then
    if [[ "$(uname -m)" == "x86_64" ]]; then
      wget -P ./ https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/mac-x64/chrome-mac-x64.zip
      hdiutil mount -nobrowse chrome-mac-x64.zip
      cp -R /Volumes/Google\ Chrome/Google\ Chrome.app/Contents/MacOS/Google\ Chrome $STORAGE_DIR/chrome/
      hdiutil unmount /Volumes/Google\ Chrome
      rm chrome-mac-x64.zip 
    elif [[ "$(uname -m)" == "arm64" ]]; then
      wget -P ./ https://chromedriver.storage.googleapis.com/114.0.5735.90/chromedriver_mac_arm64.zip
      hdiutil mount -nobrowse chromedriver_mac_arm64.zip
      cp -R /Volumes/Google\ Chrome/Google\ Chrome.app/Contents/MacOS/Google\ Chrome $STORAGE_DIR/chrome/
      hdiutil unmount /Volumes/Google\ Chrome
      rm chromedriver_mac_arm64.zip
    else
      echo "Unsupported macOS architecture"
      exit 1
    fi
  elif [[ "$(uname -s)" == "Windows" ]]; then
    if [[ "$(uname -m)" == "x86_64" ]]; then
      wget -P ./ https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/win64/chrome-win64.zip
      unzip -o ./chrome-win64.zip -d $STORAGE_DIR/chrome/
      rm ./chrome-win64.zip 
    elif [[ "$(uname -m)" == "i686" ]]; then
      wget -P ./ https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/116.0.5845.96/win32/chrome-win32.zip
      unzip -o ./chrome-win32.zip -d $STORAGE_DIR/chrome/
      rm ./chrome-win32.zip 
    else
      echo "Unsupported Windows architecture"
      exit 1
    fi
  else
    echo "Unsupported operating system"
    exit 1
  fi

  cd $HOME/backend
else
  echo "...Using Chrome from cache"
fi

pip install -r requirements.txt

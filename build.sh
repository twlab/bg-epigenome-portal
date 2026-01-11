#!/bin/bash

set -e



cd ./src

[ ! -d "node_modules" ] && npm install

npm run build

cd ../
rm -rf ./docs
mv ./src/dist ./docs





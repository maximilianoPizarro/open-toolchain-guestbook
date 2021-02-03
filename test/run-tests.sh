#!/bin/bash
# set -x
npm install
npm run start-server & npm run test-fvt
npm run stop-server
#node test.js & npm run test-fvt
FILE_LOCATIONS="test/fvt-test.json"
TEST_TYPES="fvt"

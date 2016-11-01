#!/bin/bash

#API="http://httpbin.org"
#URL_PATH="/post"
API="http://localhost:4741"
URL_PATH="/sign-in"
curl "${API}${URL_PATH}" \
  --request POST \
  --data-urlencode "credentials[email]=${EMAIL}" \
  --data-urlencode "credentials[password]=${PASSWORD}"

echo

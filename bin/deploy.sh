#!/usr/bin/env bash
set -o errexit # Exit on error
npm run build # Generate the bundled JavaScript and CSS
git push heroku master # Deploy to Heroku

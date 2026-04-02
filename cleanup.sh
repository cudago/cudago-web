#!/bin/bash

# Remove node_modules and cache
rm -rf node_modules
rm -rf .next
rm -rf .cache
rm -rf dist
rm -rf build

# Clear npm cache
npm cache clean --force

# Remove lock files to start fresh
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Remove old CRA files that might conflict
rm -f public/index.html
rm -f src/index.js
rm -f src/App.js
rm -f public/favicon.ico

echo "Cleanup complete. npm dependencies will be reinstalled automatically."

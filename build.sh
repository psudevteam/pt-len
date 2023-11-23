#!/bin/bash
set -e

# Run Next.js build with passed arguments
bun run build "$@"

# Copy files only if not in a CI environment
if [ -z "$CI" ]; then
  cp -r ./public ./.next/standalone/public
  cp -r ./.next/static ./.next/standalone/.next/static
fi

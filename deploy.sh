#!/bin/bash
# Deploy script for portfolio_site — stages, commits, and pushes in one step.
# Usage: ./deploy.sh "commit message"

set -e
cd /home/maincompute/portfolio_site

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

if [ -z "$1" ]; then
  COMMIT_MSG="Update site — $TIMESTAMP"
else
  COMMIT_MSG="$1"
fi

echo "[$TIMESTAMP] checking for changes..."

if [ -z "$(git status --porcelain)" ]; then
  echo "[$TIMESTAMP] no changes to deploy."
  exit 0
fi

git add .
git commit -m "$COMMIT_MSG"
git push origin main

echo "[$TIMESTAMP] deployed. Live in a minute or two at https://foetstech.github.io/portfolio_site/"

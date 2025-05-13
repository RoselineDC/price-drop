#!/bin/bash
cd "$(dirname "$0")"

# set up git config
if ! git config --global user.email > /dev/null; then
        git config --global user.email "roseline.danga@gmail.com"
fi

if ! git config --global user.name > /dev/null; then
	  git config --global user.name "RoselineDC"
fi

# check for commit message and exit if nothing available

if git diff --quiet && git diff --cached --quiet; then
	  echo "✅ Nothing to commit."
	    exit 0
fi

# Get current timestamp
timestamp=$(date "+%Y-%m-%d %H:%M:%S")

# Auto-commit and push
git add .
git commit -m "modified by Roseline on $timestamp"
git push origin main


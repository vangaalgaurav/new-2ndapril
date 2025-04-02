#!/bin/bash

# Get the current date and time for the commit message
current_time=$(date "+%Y-%m-%d %H:%M:%S")

# Add all changes
git add .

# Commit with timestamp
git commit -m "Auto-deploy: $current_time"

# Push to GitHub
git push origin main

# Deploy to Vercel
vercel deploy --prod 
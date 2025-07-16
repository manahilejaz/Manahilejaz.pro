#!/bin/bash

# Deploy script for Next.js static site
set -e

echo "🚀 Starting deployment process..."

# Navigate to project directory
cd /var/www/manahilejaz.pro

# Pull latest changes
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Build the project
echo "🔨 Building Next.js application..."
pnpm run build

# Copy built files to web root (if using static export)
if [ -d "out" ]; then
    echo "📁 Copying static files..."
    sudo cp -r out/* /var/www/html/
fi

# Reload nginx
echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
echo "🌐 Website is live at: https://manahilejaz.pro"
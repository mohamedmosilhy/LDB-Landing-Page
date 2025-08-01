#!/bin/bash

# Deploy script for GitHub Pages

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all changes
    git add .
    
    # Commit changes
    git commit -m "Deploy to GitHub Pages - $(date)"
    
    # Push to main branch
    git push origin main
    
    echo "🚀 Deployment initiated! Check GitHub Actions for progress."
    echo "🌐 Your website will be available at: https://mohamedmosilhy.github.io/LDB-Landing-Page/"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 
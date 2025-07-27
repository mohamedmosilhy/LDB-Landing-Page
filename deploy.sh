#!/bin/bash

# LDB Landing Page Deployment Script

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all changes
    echo "📝 Adding changes to git..."
    git add .
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Deploy: $(date)"
    
    # Push to GitHub
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Deployment initiated!"
    echo "🌐 Your site will be available at: https://mohamedmosilhy.github.io/LDB-Landing-Page/"
    echo "⏳ Please wait 2-3 minutes for GitHub Actions to complete the deployment."
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 
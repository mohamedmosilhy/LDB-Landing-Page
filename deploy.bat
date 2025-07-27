@echo off
echo 🚀 Starting deployment process...

echo 📦 Building project...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    echo 📝 Adding changes to git...
    git add .
    
    echo 💾 Committing changes...
    git commit -m "Deploy: %date% %time%"
    
    echo 🚀 Pushing to GitHub...
    git push origin main
    
    echo ✅ Deployment initiated!
    echo 🌐 Your site will be available at: https://mohamedmosilhy.github.io/LDB-Landing-Page/
    echo ⏳ Please wait 2-3 minutes for GitHub Actions to complete the deployment.
) else (
    echo ❌ Build failed! Please check the errors above.
    pause
    exit /b 1
) 
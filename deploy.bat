@echo off
echo 🚀 Starting deployment process...

echo 📦 Building the project...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful!
    
    echo 📝 Adding changes to git...
    git add .
    
    echo 💾 Committing changes...
    git commit -m "Deploy to GitHub Pages - %date% %time%"
    
    echo 🚀 Pushing to GitHub...
    git push origin main
    
    echo.
    echo 🎉 Deployment initiated! Check GitHub Actions for progress.
    echo 🌐 Your website will be available at: https://mohamedmosilhy.github.io/LDB-Landing-Page/
    echo.
    pause
) else (
    echo ❌ Build failed! Please check the errors above.
    pause
    exit /b 1
) 
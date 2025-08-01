@echo off
echo 🚀 Starting deployment to gh-pages branch...

echo 📦 Building the project...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful!
    
    echo 📝 Adding dist folder to git...
    git add dist -f
    
    echo 💾 Committing changes...
    git commit -m "Deploy to GitHub Pages - %date% %time%"
    
    echo 🚀 Pushing to gh-pages branch...
    git push origin gh-pages
    
    echo.
    echo 🎉 Deployment successful!
    echo 🌐 Your website is available at: https://mohamedmosilhy.github.io/LDB-Landing-Page/
    echo.
    pause
) else (
    echo ❌ Build failed! Please check the errors above.
    pause
    exit /b 1
) 
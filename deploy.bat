@echo off
echo Starting deployment process...

:: Get current date and time
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set YYYY=%datetime:~0,4%
set MM=%datetime:~4,2%
set DD=%datetime:~6,2%
set HH=%datetime:~8,2%
set MIN=%datetime:~10,2%
set SEC=%datetime:~12,2%

:: Add all changes
git add .

:: Commit with timestamp
git commit -m "Auto-deploy: %YYYY%-%MM%-%DD% %HH%:%MIN%:%SEC%"

:: Push to GitHub
git push origin main

:: Deploy to Vercel
vercel deploy --prod

echo Deployment process completed!
pause 
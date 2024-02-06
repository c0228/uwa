REM Deploy Dist folders to respective App Branches for Production LIVE.
REM Branches Name Format could be "release/%appFolderName%"
@ECHO OFF

set appFolderName=%1
REM Check if appName is not empty
IF NOT "%appFolderName%"=="" (
 REM Make e-ui-react Library Build
 cd e-ui-r
 npm install --force
 npm link
 cd ..

 REM Make App Build
 cd %appFolderName%
 npm install --force
 npm link e-ui-react --force
 npm run build
 cd ..

 REM Push Build dist code into main branch
 git checkout main
 git add .
 git commit -m "Pushing %appFolderName% Release code"
 git push
 
 REM Deleting old Branch and creating New Branch
 git branch -d release/%appFolderName%
 git subtree push --prefix "%appFolderName%/dist" origin release/%appFolderName%
)
# Documentation

How to make changes to the News Page using Google App Scripts and React (parcel and clasp)

### Cloning Repository

After cloning the repository onto your local machine, run `npm install` in your terminal to install all the dependencies from package.json file. Make sure git and github are logged in with your levylab credentials.

### Making changes

Go to `https://script.google.com/d/1s6_Q4AAlkTgydD1vmA9Yx2tAjkK1lLESRKhE_8m5JBl8AabTqOEJt44R/edit?usp=sharing`, and open the test deployment by clicking deploy on the top right --> test deployments --> URL. This should open the test deployment of the web page in a new tab.

In your local project, open a new terminal and run `npm run glogin`. This will allow `clasp` to connect to the app script using your levylab email in order to make changes. Continue with the authorization until the webpage prompts that you can close the tab.

After logging in, run `npm run gpull`. This will pull the existing code from google app scripts into your project to make sure everything is up to date on your local project. Run this command everytime you make a new deployment to make sure there are no conflicts when pushing onto google app scripts from your local project

Now run `npm start`. This will uses `parcel` to build the `./app-script/index.html` on your local machine. Now open a new terminal, run `npm run gpull` again to ensure everything is still up do date, and then run `npm run gstart`. This is essentially using `clasp` to watch for changes on your local machine and pushes those changes to google app scripts in real time. Any changes you make on your local machine should change on the test deployment from google app scripts. Refresh the test deployment to see these changes.

### Deployment

After making then necessary changes, go back to google app scripts. Go to deploy --> Manage Deployments. Go to the `News Page` Deployment, click edit on the top right, and change the version to the latest version, then click deploy. This should update the site on google sites automatically.

### Pushing to GitHub

When making any changes and after deploying, make sure to push changes onto github as well.

### Importance of `npm run gpull`

When opening the project on your local machine and running `npm run glogin`, make sure to run `npm run gpull` on all terminals before making any other commands to make sure everything is up to date.

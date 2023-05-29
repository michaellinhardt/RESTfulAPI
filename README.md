# RESTfulAPI

## Installation and Setup

### Clone the repository and install dependencies

```git clone https://github.com/michaellinhardt/npm-backend-restfulapi/ && cd npm-backend-restfulapi && npm install```

### Set up the Git pre-push hook

This project uses a Git pre-push hook to automatically increment the patch version in package.json before each push.

To set up the hook, create a file named pre-push in the .git/hooks directory of your local repository:

```touch .git/hooks/pre-push```

Add the following line to the file pre-push:

```#!/bin/sh
# Increment the patch version in package.json before each push
npm version patch -m "Auto bump version to %s - pre-push hook"```

Save and close the file.

Finally, make the pre-push file executable:

```chmod +x .git/hooks/pre-push```

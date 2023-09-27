# Wharton API

**Endpoints**
- `/stocks`
  - `GET` - calls the [Alpha Vantage](https://www.alphavantage.co/documentation/) API, the parameters are in `./stocks.js#get`


**To to run locally**

You'll need to have [Node](https://nodejs.org/en) installed on your computer to run the API and also something to call it. You can use the browser to call the API, but having a GUI makes testing/developing much easier; it will store multiple requests/responses for reference and you can export the data.  I use [Insomnia](https://insomnia.rest/download).

To get `Node` its best to use a version manager, this [link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) will walk you through how to install one on windows or mac.  Once installed you can run `nvm list` to show versions or `nvm current` to show current version.  If nothing was installed with nvm download, run `nvm install --lts` to get the lastest and greatest.

You'll also need `git` to manage the code.  Some mac have it pre-installed, can type `which git` in the terminal to see if you do.  If not, [link here](https://github.com/git-guides/install-git) for both mac and windows. [Github Desktop](https://desktop.github.com/) is a good GUI that's free to use.

You'll also need a code editor if you don't have one.

Once `Node` and `git` are installed, go to the folder in the terminal run `npm run install` to install all of the APIs dependencies.

- `npm run start` starts the API so you can call it.

- `npm run dev` starts the API and will also restart it if you make changes in your editor

**Calling With Insomnia**


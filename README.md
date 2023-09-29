# Wharton API

**Endpoints**
- `/stocks`
  - `GET` - calls the [Alpha Vantage](https://www.alphavantage.co/documentation/) API, the parameters are in `./stocks.js#get`


**To to run locally**

You'll need to have [Node](https://nodejs.org/en) installed on your computer to run the API and also something to call it. You can use the browser to call the API, but having a GUI makes testing/developing much easier; it will store multiple requests/responses for reference and you can export the data.  I use [Insomnia](https://insomnia.rest/download).

To get `Node` its best to use a version manager, this [link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) will walk you through how to install one on windows or mac.  Once installed, in the terminal you can run `nvm list` to show versions or `nvm current` to show current version.  If nothing was installed with nvm download, run `nvm install --lts` to get the lastest and greatest.

You'll also need `git` to manage the code.  Some macs have it pre-installed, can type `which git` in the terminal to see if you do.  If not, [link here](https://github.com/git-guides/install-git) for both mac and windows. [Github Desktop](https://desktop.github.com/) is a good GUI that's free to use.

You'll also need a code editor if you don't have one. VSCode is good.

Once `Node` and `git` are installed, go to the folder in the terminal run `npm run install` to install all of the APIs dependencies.

- `npm run start` starts the API so you can call it.

- `npm run dev` starts the API and will also restart it if you make changes in your editor

Next, while the app is running you can use the Insomnia app to call it.  URL would be `localhost:3000/stocks`, your making a `GET` request and you have two `query params` you can call with different values, `timeInterval` and `stockSymbol`.

Also went ahead and created a transform and run file just to give brief example.

**NPM package breakdown**
- https://expressjs.com/ - Node API framework
- https://www.alphavantage.co/documentation/ - for stock data
- https://scikitjs.org/docs/api#logisticregression - for ML part
- https://github.com/motdotla/dotenv#%EF%B8%8F-usage - hides env variables
- https://axios-http.com/docs/req_config - helper for http requests


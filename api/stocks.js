// This package helps with http requests - https://axios-http.com/docs/req_config
const axios = require("axios");

const transform = require("../lib/transform.js");
const run = require("../model/run.js")


const URL = 'https://www.alphavantage.co/query';
const { API_KEY } = process.env;

// const symbols = ['IBM'];

function get(req, res) {
  const { timeInterval, stockSymbol } = req.query;
  const response = axios({
    method: 'get',
    url: URL,
    params: {
      function:'TIME_SERIES_INTRADAY',
      apikey: API_KEY,
      interval: timeInterval, // Ex.'60min',
      symbol: stockSymbol // Ex. 'IBM'
    }
  }).then(({ headers, data }) => {
    console.log({ headers, data  });

    const labelData = transform(data);
    const results = run(labelData);
    res.json(results);
  });
}

module.exports = {
  get
}
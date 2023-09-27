// This package helps with http requests - https://axios-http.com/docs/req_config
const axios = require("axios");


const URL = 'https://www.alphavantage.co/query';
const { API_KEY } = process.env;

// const symbols = ['IBM'];

function get(req, res) {
  const response = axios({
    method: 'get',
    url: URL,
    params: {
      function:'TIME_SERIES_INTRADAY',
      apikey: API_KEY,
      interval: '60min',
      symbol: 'IBM'
    }
  }).then(({ headers, data }) => {
    console.log({ headers, data  });
    res.json(data);
  });
}

module.exports = {
  get
}
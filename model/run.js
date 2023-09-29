// import tensorflow and register it as the backend
const tf =  require("@tensorflow/tfjs");
const { LinearRegression, setBackend } = require("scikitjs");

// Sets Backend of SciKit package to Tensorflow
setBackend(tf);

async function run(X, y) {
  // Perform a linear regression
  let lr = new LinearRegression();
  await lr.fit(X, y);
  const score = lr.score(X, y);
  console.log({ score });

  return { score };
}

module.exports = run;
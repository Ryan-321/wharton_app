
function transform(data) {
  const timeSeriesData = Object.values(data?.['Time Series (60min)'] || {});
  console.log({ timeSeriesData });
  const ranges = timeSeriesData.map((data) => ([data['3. low'], data['2. high']].map(Number)));
  const volumes = timeSeriesData.map((data) => (Number(data['5. volume'])));
  return { ranges, volumes };
}

module.exports = transform;
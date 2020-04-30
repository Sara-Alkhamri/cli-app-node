const axios = require('axios')

module.exports = async (location) => {
  const results = await axios({
    method: 'get',
    url: 'https://weather-ydn-yql.media.yahoo.com/forecastrss',
    params: {
      format: 'json',
      q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}")`,
    },
  })

  return results.data.query.results.channel.item
}
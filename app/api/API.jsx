import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/';

const KEY = 'appid=2e7409c3193ce85c3918f88273cd7bc2&units=metric';
export const getWeather = (location) => {
   const encodedLocation = encodeURIComponent(location);
   const requestUrl = `${OPEN_WEATHER_MAP_URL}forecast?q=${encodedLocation}&${KEY}`;
    return axios.get(requestUrl).then((res) => {
          return res.data;
    },(res) => {
      throw new Error(res);
    })
}

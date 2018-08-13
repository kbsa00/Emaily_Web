//Using axios for get request to the API.
import axios from 'axios';


const API_KEY = '6e4e72bcf19742818a89d9be240c3807'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


//Action-creator for the application
export const FETCH_WEATHER = 'FETCH WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
   
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
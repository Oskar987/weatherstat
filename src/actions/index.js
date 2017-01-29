import axios from 'axios';

const OWM_API_KEY = '3108569cf72f319085380f4ae67c8119';
var ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OWM_API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(query){

    let queryParam = query.split(',');
    let url = '';

    if(queryParam.length > 1){
        url = `${ROOT_URL}&q=${queryParam[0]},${queryParam[1]}`
    }else{
        url = `${ROOT_URL}&q=${queryParam[0]},us`;
    }

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
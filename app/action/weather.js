import api from './api'
import config from '../config'
import { weather } from './constants'


const weatherQuery = "weather?q="
const forecastQuery = "forecast?q="

export function fetchWeather(cityName) {
    return (dispatch) => {

        return api(config.weatherApiHost + weatherQuery + cityName + "&APPID=" +config.weatherApiKey).get()
            .then( data => {
                    data.json().then(json => dispatch(receiveWeather(json)))
                }
            )
            .catch( err => dispatch(receiveWeather(null, err)))
    }
}

export function fetchWeatherForecast(cityName) {
    return (dispatch) => {

        return api(config.weatherApiHost + forecastQuery + cityName + "&APPID=" +config.weatherApiKey).get()
            .then( data => {
                    data.json().then(json => dispatch(receiveWeatherForecast(json)))
                }
            )
            .catch( err => dispatch(receiveWeather(null, err)))
    }
}

function receiveWeather(data, err){
    if(err){
        return {
            type: weather.FAIL_RECEIVE,
            err
        }
    }
    return {
        type: weather.RECEIVE,
        data: {data}
    }
}

function receiveWeatherForecast(forecast, err){
    console.log("receiveWeatherForecast ", forecast, err)
    if(err){
        return {
            type: weather.FAIL_RECEIVE_FORECAST,
            err
        }
    }
    return {
        type: weather.RECEIVE_FORECAST,
        data: {forecast}
    }
}
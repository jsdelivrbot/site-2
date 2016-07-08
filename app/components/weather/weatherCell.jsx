import React, { Component, PropTypes } from 'react'
import getWeatherIcon from './getWeatherIcon'

export default class Cell extends Component {

    calTemperature(temp, celsius){
        let temperature =  Math.ceil( (temp - 273.16) * 10 ) / 10
        temperature = celsius? temperature : Math.ceil( (temperature * 1.8 + 32) *10 ) /10;
        return temperature;
    }

    icon(weatherType){
        let type = weatherType.toLowerCase();

        switch(type){
            case "clouds":
                return getWeatherIcon("clouds")
            case "clear":
                return getWeatherIcon("sunny")
            case "mist":
                return getWeatherIcon("sunny")
            case "snow":
                return getWeatherIcon("snow")

            default:
                return getWeatherIcon("clouds")
        }
    }

}
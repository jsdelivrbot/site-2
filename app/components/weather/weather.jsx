import React, { Component, PropTypes } from 'react'
import { fetchWeather,fetchWeatherForecast } from '../../action/weather'
import { connect } from 'react-redux'
import _ from 'lodash'
import Current from './current.jsx'
import Forecast from './forecast.jsx'

import getWeatherIcon from './getWeatherIcon'
import style from './weather.scss'

class Weather extends Component {
    constructor(props){
        super(props)
        this.switchUnit = this.switchUnit.bind(this)
        this.getTemperature = this.getTemperature.bind(this)
        this.searchCity = this.searchCity.bind(this)

        this.state = {
            ready: false,
            open: false,
            celsius: true
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.weather) {
            this.setState({
                ready: true,
                open: true
            })
        }
    }

    getTemperature(weather){
        if(!weather.main)
            return

        let temperature =  Math.ceil( (weather.main.temp - 273.16) * 10 ) / 10
        temperature = this.state.celsius? temperature : Math.ceil( (temperature * 1.8 + 32) *10 ) /10;
        return temperature;
    }

    switchUnit(){
        this.setState({
            celsius: !this.state.celsius
        })

    }

    searchCity(){
        const cityName = this.refs.cityName.value
        if(!cityName)
            return

        this.setState({
            ready: false
        })

        localStorage.setItem("location",cityName)
        this.props.dispatch(fetchWeather(cityName))
        this.props.dispatch(fetchWeatherForecast(cityName))
    }

    componentDidMount(){
        const cityName = localStorage.getItem("location")
        this.props.dispatch(fetchWeather(cityName ? cityName : "chicago"))
        this.props.dispatch(fetchWeatherForecast(cityName ? cityName : "chicago"))
    }


    render(){
        const containerClass= this.state.ready && this.state.open ? style.container+" "+ style.open : style.container.close
        const { weather, celsius, forecasts } = this.props;

        return this.state.ready?
                (<div className={containerClass}>
                    <div className={style.item1 +" "+ style.flex +" "+style.inputContainer}>
                            <span className={style.item1} >
                                <input ref="cityName" className={style.cityInput} type="text" defaultValue={ weather.name } />
                            </span>
                             <span onClick={ this.searchCity } className={style.inputButton}>
                                {getWeatherIcon("location")}
                            </span>
                    </div>

                    <div className={style.item1} >
                        <Current
                            celsius={this.state.celsius}
                            weatherType={weather.weather[0].main}
                            temp={weather.main.temp}
                            switchUnit={this.switchUnit} />
                    </div>

                    <div className={style.item1 + " " + style.flex} style={{maxWidth:"50%"}}>
                        { forecasts ? _.take(_.filter(forecasts.list, (item, i) => i % 2 === 0),5).map((forecast,i) =>
                            <Forecast
                                key={i}
                                date={forecast.dt_txt}
                                celsius={this.state.celsius}
                                maxTemp={forecast.main.temp_max}
                                minTemp={forecast.main.temp_min}
                                weatherType={forecast.weather[0].main}/>
                        ) : null}
                    </div>
                </div>): null
    }
}

Weather.propTypes = {
    weather: PropTypes.object,
    forecasts: PropTypes.object
}

export default connect((state) => { return { weather: state.weather.data, forecasts: state.weather.forecast }})(Weather);
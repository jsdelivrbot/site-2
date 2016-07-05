import React, { Component, PropTypes } from 'react'
import { fetchWeather,fetchWeatherForecast } from '../action/weather'
import { connect } from 'react-redux'
import SVG from './svg.jsx'

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
                open: true,
                weather: nextProps.weather
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
    }

    componentDidMount(){
        const cityName = localStorage.getItem("location")

        this.props.dispatch(fetchWeather(cityName ? cityName : "chicago"))
        this.props.dispatch(fetchWeatherForecast(cityName ? cityName : "chicago"))
    }

    render(){
        const style = require("./weather.scss")
        const containerClass= this.state.ready && this.state.open ? style.container+" "+ style.open : style.container.close
        const { weather, celsius } = this.state;

        return this.state.ready?
                (<div className={containerClass}>
                    <div className={style.item2 +" "+ style.flex +" "+style.inputContainer}>
                            <span style={{flex: 1}}>
                                <input ref="cityName" className={style.cityInput} type="text" defaultValue={ weather.data.name } />
                            </span>

                             <span onClick={ this.searchCity } className={style.inputButton}>
                                                        {SVGs.location}
                                                    </span>
                    </div>

                    <div className={ style.item1 } style={{textAlign:"center"}}>
                                            <span>{SVGs.snow}</span>
                                        </div>

                    <div className={style.item2}>
                        <span style={{verticalAlign:"super"}}>{ this.getTemperature(weather.data) }</span>
                        <span onClick={ this.switchUnit } className={style.unit}>{celsius ? '°C': '°F'}</span>
                    </div>
                </div>): null
    }
}

Weather.propTypes = {
    weather: PropTypes.object
}

function getWeatherIcon(type){

}

function createSvg(svg, width,height,stroke,fill){
 return <SVG svgFile= {svg} width={width} height={height} strokeColor={stroke} fillColor={fill} />
}

const width = "34px"
const height = "34px"

const stroke = "rgba(57, 198, 236, 0)"
const fill = "#999999"

const locationFill="#ffffff"

const tempStroke = "rgb(57, 198, 236)"
const tempFill = "rgb(57, 198, 236)"

const rainSvg = require("../../static/icons/rain.svg")
const heavyRain = require("../../static/icons/heavy_rain.svg")
const mostClouds = require("../../static/icons/most_clouds.svg")
const snow = require("../../static/icons/snow.svg")
const snowRain = require("../../static/icons/snow_rain.svg")
const sunny = require("../../static/icons/sunny.svg")
const sunnyClouds = require("../../static/icons/sunny_clouds.svg")
const thunder = require("../../static/icons/thunder.svg")
const wind = require("../../static/icons/wind.svg")
const windRain = require("../../static/icons/wind_rain.svg")
const location = require("../../static/icons/location.svg")
const humity = require("../../static/icons/humity.svg")
const temperature = require("../../static/icons/temperature.svg")

const SVGs = {
    rain : createSvg(rainSvg, width, height, stroke, fill),
    heavyRain : createSvg(heavyRain, width, height, stroke, fill),
    mostClouds : createSvg(mostClouds, width, height, stroke, fill),
    snow : createSvg(snow, width, height, stroke, fill),
    snowRain : createSvg(snowRain, width, height, stroke, fill),
    sunny : createSvg(sunny, width, height, stroke, fill),
    sunnyClouds : createSvg(sunnyClouds, width, height, stroke, fill),
    thunder : createSvg(thunder, width, height, stroke, fill),
    wind : createSvg(wind, width, height, stroke, fill),
    windRain : createSvg(windRain, width, height, stroke, fill),
    location : createSvg(location, "28px", "28px", stroke, locationFill),
    humity : createSvg(humity, width, height, stroke, fill),
    temperature : createSvg(temperature, width, height, tempStroke, tempFill),
}


export default connect((state) => { return { weather: state.weather }})(Weather);
import React, { Component, PropTypes } from 'react'
import SVG from '../svg.jsx'

const width = "30px"
const height = "30px"

const stroke = "rgba(57, 198, 236, 0)"
const fill = "#999999"

const locationFill="#ffffff"

const tempStroke = "rgb(57, 198, 236)"
const tempFill = "rgb(57, 198, 236)"

const sunnyFill="rgb(245, 231, 93)"

const rainSvg = require("../../../static/icons/rain.svg")
const heavyRain = require("../../../static/icons/heavy_rain.svg")
const clouds = require("../../../static/icons/most_clouds.svg")
const snow = require("../../../static/icons/snow.svg")
const snowRain = require("../../../static/icons/snow_rain.svg")
const sunny = require("../../../static/icons/sunny.svg")
const sunnyClouds = require("../../../static/icons/sunny_clouds.svg")
const thunder = require("../../../static/icons/thunder.svg")
const wind = require("../../../static/icons/wind.svg")
const windRain = require("../../../static/icons/wind_rain.svg")
const location = require("../../../static/icons/location.svg")
const humity = require("../../../static/icons/humity.svg")
const temperature = require("../../../static/icons/temperature.svg")

const SVGs = {
    rain : createSvg(rainSvg, width, height, stroke, fill),
    heavyRain : createSvg(heavyRain, width, height, stroke, fill),
    clouds : createSvg(clouds, width, height, stroke, fill),
    snow : createSvg(snow, width, height, stroke, fill),
    snowRain : createSvg(snowRain, width, height, stroke, fill),
    sunny : createSvg(sunny, width, height, stroke, sunnyFill),
    sunnyClouds : createSvg(sunnyClouds, width, height, stroke, fill),
    thunder : createSvg(thunder, width, height, stroke, fill),
    wind : createSvg(wind, width, height, stroke, fill),
    windRain : createSvg(windRain, width, height, stroke, fill),
    location : createSvg(location, "28px", "28px", stroke, locationFill),
    humity : createSvg(humity, width, height, stroke, fill),
    temperature : createSvg(temperature, width, height, tempStroke, tempFill),
}

function createSvg(svg, width,height,stroke,fill){
 return <SVG svgFile= {svg} width={width} height={height} strokeColor={stroke} fillColor={fill} />
}

export default (weatherType) => SVGs[weatherType]
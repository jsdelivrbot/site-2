import React, { Component, PropTypes } from 'react'
import currentStyle from './current.scss'
import Cell from './weatherCell.jsx'

const style = require("./weather.scss")

class Current extends Cell {

    constructor(props){
        super(props)
    }

    render(){
        const celsius = this.props.celsius
        const switchUnit = this.props.switchUnit
        const temp = this.props.temp

        return (<div className={ style.item1 } style={{textAlign:"center"}}>
                    <span className={currentStyle.icon}>{ super.icon(this.props.weatherType) }</span>
                    <span className={currentStyle.temperature}>{ super.calTemperature(temp, celsius) }</span>
                    <span onClick={ switchUnit } className={style.unit}>{celsius ? '°C' : '°F'} |</span>
                    <span onClick={ switchUnit } className={style.unit}>{celsius ? '°C' : '°F'}</span>
                </div>)
    }
}

Current.propTypes = {
    celsius: PropTypes.bool,
    weatherType: PropTypes.string,
    temp: PropTypes.number,
    switchUnit: PropTypes.func
}


export default Current
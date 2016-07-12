import React, { Component, PropTypes } from 'react'
import Cell from './weatherCell.jsx'
import style from './forecast.scss'

class Forecast extends Cell {

    constructor(props){
        super(props)
    }

    render(){
        const d = new Date(this.props.date)

        return (<div className={style.forecastCell}>
                    <div className={style.icon}>{ super.icon(this.props.weatherType) }</div>

                    <div>{d.getMonth() + 1}/{d.getDate()}</div>
                    <div>{d.getHours()}:00</div>
                    <div className={style.temperature}>
                        {super.calTemperature(this.props.minTemp, this.props.celsius)}~{super.calTemperature(this.props.maxTemp,this.props.celsius)}
                        <span className={style.unit}>{this.props.celsius ? '°C': '°F'}</span>
                    </div>
                </div>)
    }
}

Forecast.propTypes = {
    date: PropTypes.string,
    celsius: PropTypes.bool,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    weatherType: PropTypes.string
}

export default Forecast
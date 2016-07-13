import React, { Component } from 'react'
import Header from '../components/header.jsx'
import Weather from '../components/weather/weather.jsx'
import { connect } from 'react-redux'
import fonts from './fonts.scss'
import styles from './app.scss'
import { register } from '../eventEmitter'

class App extends Component{

    componentDidMount(){
        register("window_resize", this.resize)
    }

    resize(window){
        window.isDesktop = window.innerWidth > 750
        window.isTablet = window.innerWidth <= 750 &&  window.innerWidth > 550
        window.isMobile = window.innerWidth <= 550;
    }

    render(){
        return (
            <div className={styles.app +"  "+fonts.ansonregular}>
                <Header/>
                <div className={styles.main}>
                    <Weather />
                    <div className={styles.content}>
                    {
                        this.props.children
                    }
                    </div>
                </div>
            </div>)
    }
}

export default connect(null)(App);
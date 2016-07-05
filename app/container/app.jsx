import React, { Component } from 'react'
import Header from '../components/header.jsx'
import Weather from '../components/weather.jsx'
import { connect } from 'react-redux'

class App extends Component{

    render(){
        const styles = require('./app.scss');

        return (
            <div className={styles.app}>
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
import React, { Component } from 'react'
import Header from '../components/header.jsx'

export default class App extends Component{

    render(){
        const styles = require('./app.scss');

        return (
            <div className={styles.app}>
                <Header/>
                {
                    this.props.children
                }
            </div>)
    }
}

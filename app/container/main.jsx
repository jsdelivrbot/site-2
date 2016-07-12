import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../components/header.jsx'

export default class Main extends Component{

    render(){
          return (
              <div className="main">
                <video src="http://localhost:8080/api/video" autoPlay loop></video>
              </div>
          )
    }
}

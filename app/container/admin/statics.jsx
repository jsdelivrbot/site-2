import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './statics.scss'
import VideoPlayer from '../../components/videoPlayer.jsx'

export default class Statics extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        return (
        <div>
            <VideoPlayer width="800px" height="430px" src="/api/video?movie=zxc"/>
        </div>)
    }
}
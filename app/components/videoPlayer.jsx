import React, { Component, PropTypes } from 'react'
import style from './videoPlayer.scss'
import SVG from './svg.jsx'

const playSvg = require("../../static/icons/audio-video-outline-play.svg")

export default class VideoPlayer extends Component {

    static propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,
        src: PropTypes.string
    }

    constructor(props){
        super(props)
        this.state = {
            playing: false
        }
        this.handleStartPause = this.handleStartPause.bind(this)
    }

    componentDidMount(){
        const state = this.state
        this.video = this.refs.video

        this.video.src = this.props.src
        this.video.onloadedmetadata = function(data) {

           console.log(data)

           if(state.playing){
                this.play();
            }
            else{
                this.pause();
            }
         };
    }

    handleStartPause(){
        const video = this.video;
        const playing = !this.state.playing
        this.setState({
            playing
        })

        if(playing){
            video.play();
        }
        else{
            video.pause();
        }
    }

    render(){
        const { playing } = this.state
        const { width, height } = this.props
        const controllerClasses = style.controller + (!playing ? (" " + style.pause) : "")
        const iconClasses = style.centerIcon + (playing ? (" " + style.hide) : "")

        return (<div>
                    <div className= { style.container } style={{width, height}}>
                        <video ref="video" className= { style.video }  ></video>

                        <div className= { controllerClasses } onClick={ this.handleStartPause } >
                            <div className={ style.centerIconContainer }>
                                <SVG classes={ iconClasses }  svgFile={playSvg} />
                            </div>
                        </div>
                    </div>)
                </div>)

    }

}
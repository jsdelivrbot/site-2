import React, { Component, PropTypes } from 'react'

const DEFAULT_WIDTH = "16PX"
const DEFAULT_HEIGHT = "16PX"

class SVG extends Component{

    constructor(props){
        super(props)
        this.state = setState(this.state, props.svgFile, props)
    }

    render(){
        const { content, width, height, viewBox, strokeColor, fillColor } = this.state;
        const { classes } = this.props;

        console.log(classes)

        return content ?
        (<svg version="1.1"
            viewBox={viewBox}
            width={width}
            height={height}
            className={ classes }
            style={{stroke : strokeColor, fill: fillColor}}
            dangerouslySetInnerHTML={{__html: content}}>
        </svg>) : null
    }
}

function setState(state, svgFile, props){
    if(!svgFile)
        return

    let parser = new DOMParser()
    let dom = parser.parseFromString(svgFile, 'text/xml')

    let svgElement = dom.getElementsByTagName('svg').length > 0 ? dom.getElementsByTagName('svg')[0]: null
    let viewBox = svgElement ? svgElement.getAttribute("viewBox") : null
    const svgContent = svgElement? svgElement.innerHTML : svgFile;

    return {
        content: svgContent,
        viewBox: viewBox,
        width: props.width? props.width: DEFAULT_WIDTH,
        height: props.height? props.height: DEFAULT_HEIGHT,
        strokeColor: props.strokeColor? props.strokeColor: null,
        fillColor: props.fillColor? props.fillColor: null
    }
}

SVG.propTypes = {
    svgFile: PropTypes.string.isRequired,
    strokeColor: PropTypes.string,
    fillColor: PropTypes.string,
    classes: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export default SVG;
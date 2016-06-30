import React, { Component } from 'react';

export default class Spinner extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const style = require("./spinner.scss");

        let size;
        switch(this.props.size){
            case "large":
                size = style.large;
            break;
            case "medium":
                size = style.medium;
            break;
            case "small":
                size = style.small;
            break;
            default:
                size = style.medium;
        }

        const classes = style.loader + " " + size;

        return (<div className={classes} style={{fontSize: size}}>Loading...</div>)
    }
}
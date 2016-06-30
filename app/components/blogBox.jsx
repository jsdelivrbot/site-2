import React, { Component, PropTypes } from 'react'
import Spinner from './spinner.jsx'
import marked from 'marked'

class BlogBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            markdown: props.markdown
        }
    }

    componentDidMount(){
        let that = this;

        marked(that.state.markdown, function(err, html){
            setTimeout(()=>that.setState({
                ready: true,
                html
            }), 1000)
        })
    }

    render(){
        const style = require("./blogBox.scss");
        const { ready } = this.state;
        const className = style.content + " " + (ready ? style.ready : "");

        return (
                <div className={style.box}>
                   {!ready ? <Spinner />: null}
                   <div className={className} dangerouslySetInnerHTML={{__html: this.state.html}} />
                </div>
                )
    }
}

BlogBox.propTypes = {
    markdown: PropTypes.string.isRequired
}

export default BlogBox;
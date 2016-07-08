import React, { Component, PropTypes } from 'react';
import BlogBox from '../components/blogBox.jsx';
import { retrieveBlogs, getBlog } from '../action/blogs'
import { connect } from 'react-redux'

export default class Blogs extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
        this.renderBlogs = this.renderBlogs.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(retrieveBlogs(0))
    }

    componentWillReceiveProps(nextProps){
        console.log("__________Receive props ",nextProps)
    }

    renderBlogs(){
        return this.props.blogs ? this.props.blogs.map(b => <BlogBox key={b.id} title={b.title} tags={b.tags} markdown={b.markdown} time={b.cTime}/>) : null
    }

    render(){
        return (<div>{this.renderBlogs()}</div>);
    }
}

Blogs.propTypes = {
    blogs: PropTypes.array
}

export default connect((state) => { return { blogs: state.blogs }})(Blogs);

import React, { Component } from 'react'
import { getBlog } from '../action/blogs'
import { connect } from 'react-redux'
export default class Blog extends Component{

    componentWillMount(){
        const blogId = this.props.params.blogId
        this.props.dispatch(getBlog(blogId))
    }

    render(){
        return <div>{ this.props.blog ? <h1>{this.props.blog.title}</h1> : <h1>No</h1> }</div>
    }
}

export default connect((state) => { return { blog: state.blog }})(Blog);

import React, { Component, PropTypes } from 'react';
import BlogBox from '../components/blogBox.jsx';
import { retrieveBlogs, getBlog } from '../action/blogs'
import { connect } from 'react-redux'
import { register } from '../eventEmitter'

export default class Blogs extends Component{

    constructor(props){
        super(props);
        this.state = {}
        this.renderBlogs = this.renderBlogs.bind(this);
    }

    componentDidMount(){
        register( "window_scroll", this.handleScroll )
        if(!this.props.blogs.initLoad)
            this.props.dispatch(retrieveBlogs(0))
    }

    componentWillReceiveProps(nextProps){
    }

    handleScroll(pos){
        const {top, left} = pos
        //add scroll to bottom logic
    }

    renderBlogs(){
        return this.props.blogs.items ?
            this.props.blogs.items.map(b => <BlogBox
                key={b.id} title={b.title}
                tags={b.tags}
                markdown={b.markdown}
                createdTime={b.createdTime}
                comments={b.comments}
                link={ "/blog/" + b._id }
                />) : null
    }

    render(){
        return (<div>{this.renderBlogs()}</div>);
    }
}

Blogs.propTypes = {

    blogs: PropTypes.object
}

export default connect((state) => { return { blogs: state.blogs }})(Blogs);

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { retrieveBlogs, getBlog } from '../../action/blogs'
import { register } from '../../eventEmitter'
import { connect } from 'react-redux'
import BlogBox from '../../components/blogBox.jsx';

class AdminBlogs extends Component{

    static propTypes = {
               blogs: PropTypes.array
           }

    componentDidMount(){
        register( "window_scroll", this.handleScroll )
        this.props.dispatch(retrieveBlogs(0))

    }

    handleScroll(){

    }

    renderBlogs(){
        return this.props.blogs ?
            this.props.blogs.map(b =>
                <BlogBox
                    key={b.id} title={b.title}
                    tags={b.tags}
                    markdown={b.markdown}
                    createdTime={b.createdTime}
                    comments={b.comments}
                    link={ "/admin/edit/" + b.id }
                />) : null
    }

    render(){
        return (
        <div>
            {this.renderBlogs()}
        </div>)
    }
}

export default connect((state) => { return { blogs: state.blogs }})(AdminBlogs);
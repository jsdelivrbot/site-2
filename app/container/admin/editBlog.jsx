import React, { Component, PropTypes } from 'react'
import { getBlog } from '../../action/blogs'
import { connect } from 'react-redux'

export default class EditBlog extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        const blogId = this.props.params.blogId
        if(blogId && !this.state.blog){
            this.props.dispatch(getBlog(blogId))
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.blog){
            this.setState({
                blog: nextProps.blog
            })
        }
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    static propTypes = {
        blog: PropTypes.object
    }

    render(){
        return (<div>
                    <h1>
                        { this.state.blog ? "Edit:":"Create" }
                    </h1>
                </div>)
    }
}

export default connect(state => {
       return { blog : state.blog }
   })(EditBlog)

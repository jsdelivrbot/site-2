import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './dashboard.scss'
import { connect } from 'react-redux'

class DashBoard extends Component{

    componentWillMount(){
        if(!localStorage.token){
            this.props.history.replace("/admin/login")
        }else{
            this.props.history.replace("/admin/blogs")
        }
    }

    renderHeader(){
        return (<div className= { style.header }>
                    <Link className="what" to='/admin/blogs'>Admin Blogs</Link>
                    <Link className="what" to='/admin/statics'>Statics</Link>
                </div>)
    }

    render(){
        return (
                <div className={ style.admin }>
                    { this.renderHeader() }
                    { this.props.children }
                </div>)}
}

export default connect()(DashBoard)
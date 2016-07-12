import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './dashboard.scss'
import { connect } from 'react-redux'

class DashBoard extends Component{
    componentWillMount(){
        if(!localStorage.token){
            this.context.router.replace("/admin/login")
        }else{
            this.context.router.replace(this.props.location.pathname)
        }
    }

    renderHeader(){
        return (<div className= { style.header }>
                    <Link className= { style.tabs } to='/admin/blogs'>Manage Blogs</Link>
                    <Link className= { style.tabs } to='/admin/statics'>Statics</Link>
                </div>)
    }

    render(){
        return (
                <div className={ style.admin }>
                    { this.renderHeader() }
                    <div className={ style.content }>
                    { this.props.children }
                    </div>
                </div>)}
}

DashBoard.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect()(DashBoard)
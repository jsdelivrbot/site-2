import React, { Component, PropTypes } from 'react'
import style from './admin.scss'
import { login, logout } from '../../action/login'
import { connect } from 'react-redux'

export default class Admin extends Component{

    componentDidMount(){
    }

    renderHeader(){
        return (<div className= { style.header }>
                    <Link to='/create'>Add Blog</Link>
                    <Link to='/statics'>Statics</Link>
                </div>)
    }

    render(){
        return (
        <div className={ style.admin }>
            { this.props.children }
        </div>)
    }
}


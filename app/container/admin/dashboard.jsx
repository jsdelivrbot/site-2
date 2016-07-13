import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './dashboard.scss'
import { connect } from 'react-redux'
import { verify } from '../../action/login'


class DashBoard extends Component{
    static propTypes = {
        loginInfo: PropTypes.object.isRequired
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    constructor(){
        super()
        this.state = {
            ready : false
        }
    }

    componentWillMount(){
        if(!localStorage.token){
            this.context.router.replace("/admin/login")
        }else{
            const token = localStorage.token
            this.props.dispatch(verify(token))
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.loginInfo && nextProps.loginInfo.loggedIn && !this.state.ready){
              this.setState({
                    ready: true
              })
              this.context.router.replace(this.props.location.pathname)
        }else if (nextProps.loginInfo && !nextProps.loginInfo.loggedIn) {
            this.context.router.replace("/admin/login")
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

export default connect(state => {
                   return {loginInfo : state.loginInfo}
               })(DashBoard)
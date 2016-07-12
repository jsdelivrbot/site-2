import React, { Component, PropTypes } from 'react'
import style from './admin.scss'
import { login, logout } from '../../action/login'
import { connect } from 'react-redux'


class Login extends Component{

    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    login(){
        const user = this.refs.userName;
        const password = this.refs.password;

        this.props.dispatch(login(user,password))
    }

    logout(){

    }

    render(){
        return (
            <div className={ style.container }>
                <div className={ style.login }>
                    <h1>Login:</h1>
                    <div className={ style.inputContainer }>
                        <input ref="userName" className={ style.input }
                            type = "text"
                            placeholder="Only jing would know" />
                    </div>
                     <div className={ style.inputContainer }>
                        <input ref="password" className={ style.input } type = "password" />
                    </div>
                    <button className= {style.submitButton} onClick={this.login}>Login</button>
               </div>
           </div>)
    }
}

Login.propTypes = {
    loggedIn: PropTypes.bool.isRequired
}


export default connect(state => state.loggedIn)(Login)
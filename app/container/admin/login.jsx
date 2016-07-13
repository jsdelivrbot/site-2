import React, { Component, PropTypes } from 'react'
import style from './admin.scss'
import { login, logout } from '../../action/login'
import { connect } from 'react-redux'


class Login extends Component{

    static propTypes = {
        loginInfo: PropTypes.object.isRequired
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.loginInfo && nextProps.loginInfo.loggedIn ){
            this.context.router.replace("/admin")
        }
    }

    login(){
        const user = this.refs.userName;
        const password = this.refs.password;

        this.props.dispatch(login(user,password))
    }

    logout(){
        this.props.dispatch(logout())
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


export default connect(state => {
    return {loginInfo : state.loginInfo}
})(Login)
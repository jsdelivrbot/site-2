import api from './api'
import { loginConstants } from './constants'

export function verify(token){
    return dispatch => dispatch({
        type: loginConstants.LOGIN_SUCCEED,
        token: "123"
    })
}

export function login(user, password){
    localStorage.token = "123"

    return dispatch => dispatch({
        type: loginConstants.LOGIN_SUCCEED,
        token: "123"
    })
}

export function logout(){

    delete localStorage.token

    return dispatch => dispatch({
        type: loginConstants.LOGIN_FAILED
    })
}
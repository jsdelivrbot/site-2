const { login } = require('../action/constants');

const isLoggedIn = false

export function loginReducer(state = isLoggedIn, action) {
	switch (action.type) {
        case login.LOGGED_IN:
            return true
        case login.LOGGED_OUT:
            return false
		default:
			return state
    }
}
const { loginConstants } = require('../action/constants');

const loginInfo = { loggedIn: false }

export function loginReducer(state = loginInfo, action) {
	switch (action.type) {
        case loginConstants.LOGIN_SUCCEED:
            return { loggedIn: true, token:  action.token }
        case loginConstants.LOGIN_FAILED:
            return { loggedIn: false }
		default:
			return state
    }
}
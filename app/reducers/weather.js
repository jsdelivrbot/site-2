const { weather } = require('../action/constants');

const initialState = {}

function update(state = initialState, action) {

	switch (action.type) {
		case weather.RECEIVE:
			return Object.assign({}, state, action.data)
        case weather.RECEIVE_FORECAST:
            return Object.assign({}, state, action.data)
        case weather.FAIL_RECEIVE:
            return Object.assign({}, state, action.err)
        case weather.FAIL_RECEIVE_FORECAST:
            return Object.assign({}, state, action.err)
		default:
			return state
  }
}

export default update;
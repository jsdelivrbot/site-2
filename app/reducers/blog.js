const { blogs } = require('../action/constants');

const blog = {}

export function updateBlogs(state = [], action) {

	switch (action.type) {
        case blogs.RECEIVE_ALL:
            return state.concat(action.blogs)
        case blogs.FAIL_RECEIVE_ALL:
            return Object.assign({}, state, action.data)
		default:
			return state
    }
}

export function getBlog(state = blog, action) {

	switch (action.type) {
        case blogs.RECEIVE:
            return Object.assign({}, state, action.blog)
        case blogs.FAIL_RECEIVE:
            return Object.assign({}, state, action.data)
		default:
			return state
    }
}
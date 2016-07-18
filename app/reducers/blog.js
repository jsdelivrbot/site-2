const { blogs } = require('../action/constants');

const blogsItems = {
    initLoad: false,
    items: []
}

const blog = {}

export function getBlogs(state = blogsItems, action) {
	switch (action.type) {
        case blogs.RECEIVE_ALL:
            return { initLoad: true, items: state.items.concat(action.blogs) }
        case blogs.FAIL_RECEIVE_ALL:
            state.status = "failed"
            return state
		default:
			return state
    }
}

export function getBlog(state = blog, action) {

	switch (action.type) {
        case blogs.RECEIVE_BLOG:
            return Object.assign({}, state, action.blog )
        case blogs.FAIL_RECEIVE_BLOG:
            return Object.assign({}, state, action.data )
		default:
			return state
    }
}
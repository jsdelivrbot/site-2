import api from './api'
import { blogs } from './constants'

export function retrieveBlogs(from){
    return dispatch => {
         return api('/api/blogs').get()
            .then( data => data.json() )
            .then( data => { dispatch({ type: blogs.RECEIVE_ALL, blogs:data })})
            .catch( err => dispatch({ type: blogs.FAIL_RECEIVE_ALL, err }))
    }
}

export function getBlog(id){
    return dispatch => {
         return api('/api/blog/' + id).get()
            .then( data => data.json() )
            .then( data => { dispatch({ type: blogs.RECEIVE_BLOG, blog: data })})
            .catch( err => dispatch({ type: blogs.FAIL_RECEIVE_BLOG, err }))
    }
}

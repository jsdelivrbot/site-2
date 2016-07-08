import api from './api'
import { blogs } from './constants'

export function retrieveBlogs(from){
    return dispatch => dispatch({
                        type: blogs.RECEIVE_ALL,
                        blogs: [{id:1,
                                 title:"Introduction to React",
                                 tags:["React","Front end","Programming","Introduction"],
                                 markdown:"\n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n**asterisks**\n"
                                }]
                            })
}

export function getBlog(id){
    return dispatch => dispatch({
                        type: blogs.RECEIVE,
                        blog: [{id:1,
                                 title:"Introduction to React",
                                 tags:["React","Front end","Programming","Introduction"],
                                 markdown:"\n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n**asterisks**\n"
                            }]
                    })
}
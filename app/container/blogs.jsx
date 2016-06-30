import React, { Component } from 'react';
import BlogBox from '../components/blogBox.jsx';
import blogActions from '../action/blogs'

export default class Blogs extends Component{

    constructor(props){
        super(props);
        this.state = {
            blogs:[
                {id:1, markdown:"# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n"},
                {id:2, markdown:"# Introduction to React \n#### What is React js? (5 mins)."},
                {id:3, markdown:"# Introduction to React \n#### What is React js? (5 mins)."},
                {id:4, markdown:"# Introduction to React \n#### What is React js? (5 mins)."},
                {id:5, markdown:"# Introduction to React \n#### What is React js? (5 mins)."},
                {id:6, markdown:"# Introduction to React \n#### What is React js? (5 mins)."},
                {id:7, markdown:"# Introduction to React \n#### What is React js? (5 mins)."},
                {id:8, markdown:"# Introduction to React \n#### What is React js? (5 mins)."}
                ]
        }
        this.renderBlogs = this.renderBlogs.bind(this);
    }

    componentDidMount(){

    }

    renderBlogs(){
        return this.state.blogs.map(b => <BlogBox key={b.id} markdown={b.markdown} time={b.cTime}/>)
    }

    render(){
        return (<div>{this.renderBlogs()}</div>);
    }
}

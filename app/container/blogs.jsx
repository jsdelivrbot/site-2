import React, { Component } from 'react';
import BlogBox from '../components/blogBox.jsx';
import blogActions from '../action/blogs'

export default class Blogs extends Component{

    constructor(props){
        super(props);
        this.state = {
            blogs:[
                {id:1, markdown:"# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n#### What is React js? (5 mins).\n# Introduction to React \n**asterisks**\n"},
                {id:2, markdown:"# Introduction to React \n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')"},
                {id:3, markdown:"# Introduction to React \n```javascript\n"+
                                                           "var s = 'JavaScript syntax highlighting';\n"+
                                                           "alert(s);\n"
                                                           +"```"},
                {id:4, markdown:"# Introduction to React \n[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=mX0y7nDSm2w)"},
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

import React, { Component } from 'react'
import { Link } from 'react-router'
import classes from 'classnames'

export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            touchingAvatar: false,
            rotateRight: true
        }
        this.touchAvatar = this.touchAvatar.bind(this)
        this.unTouchAvatar = this.unTouchAvatar.bind(this)
    }

    touchAvatar(event){
        const { rotateRight } = this.state;
        this.setState({
            touchingAvatar: true,
            rotateRight: !rotateRight
        })
    }

    unTouchAvatar(event){
        this.setState({
            touchingAvatar: false
        })
    }

    render(){
          const jing = require("../../static/images/jing.jpg");
          const url = "url('" + jing + "')";
          const style = require("./header.scss")

          let avatarClasses = style.avatar;
          if(this.state.touchingAvatar){
            avatarClasses += " " + (this.state.rotateRight? style.rightRotate: style.leftRotate)
          }

          return (

              <div className={style.appHeader}>
                <div className={avatarClasses} style={{backgroundImage: url}}
                    onTouchStart={this.touchAvatar}
                    onMouseEnter={this.touchAvatar}
                    onTouchEnd={this.unTouchAvatar}
                    onMouseLeave={this.unTouchAvatar}
                    >
                </div>
                <div className={style.sayHello}>Hey there!</div>

                <ul className={style.menuList}>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                </ul>
              </div>
          )
    }
}

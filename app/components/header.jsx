import React, { Component } from 'react'
import { Link } from 'react-router'
import classes from 'classnames'
import { connect } from 'react-redux'

class Header extends Component{

    constructor(props){
        super(props);

        const path = props.routing.locationBeforeTransitions.pathname;

        this.state = {
            touchingAvatar: false,
            rotateRight: true,
            path
        }

        this.touchAvatar = this.touchAvatar.bind(this);
        this.unTouchAvatar = this.unTouchAvatar.bind(this);
    }

    componentWillReceiveProps(props){
        const path = props.routing.locationBeforeTransitions.pathname;
        console.log(path);
        this.setState({
            path
        });
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

    renderItems(style){
        const { path } = this.state;

        return (
         <ul className={style.menuList}>
            <li className={ style.menuItem+" "+ (path==='/blogs'? style.active : "")} ><Link to="/blogs">Blogs</Link></li>
            <li className={ style.menuItem+" "+ (path==='/about'? style.active :"" )}><Link to="/about">About</Link></li>
         </ul>)
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

                <div>Jing Guo</div>

                {this.renderItems(style)}
              </div>
          )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const mapStateToProps = (state) => {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);


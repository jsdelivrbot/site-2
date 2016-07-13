import React, { Component, PropTypes } from 'react'
import Spinner from './spinner.jsx'
import marked from 'marked'

const colors = ["#f3eb54", "#f69a33", "#2eacb3", "#b3ccba", "#e84f5e"]

class BlogBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            markdown: props.markdown
        }

        this.jumpTo = this.jumpTo.bind(this)
    }

    componentDidMount(){
        let that = this;

        marked(that.props.markdown, function(err, html){
            setTimeout(()=>{that.setState({
                ready: true,
                html
            })
            PR.prettyPrint()
            }, 100)
        })
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    renderTags(style, tags){
        return (<div className= {style.tags}>
                    {tags ? tags.map((tag, i) => (<span key={i} className={style.tag} style={{backgroundColor: calColor(tag)}} >{tag}</span>)) : null }
                </div>)
    }

    jumpTo(){
        if(this.props.link)
            this.context.router.push(this.props.link)
    }

    renderComment(style,comments){
        return (
            <div>
                <div>Comments:</div>
                { comments ? comments.map(comment => {
                const date = new Date(comment.createdTime)

                return (<div key={ comment.id }>
                        <strong>{ comment.name } </strong>
                        <span>{ date.getMonth() + 1 } / { date.getDate() } </span>
                    </div>)
                }

                ) : null }
            </div>
        )
    }

    render(){
        const style = require("./blogBox.scss");
        const { ready } = this.state;
        const { title, tags, createdTime,comments } = this.props;
        const className = style.content + " " + (ready ? style.ready : "");

        return (
                <div className={style.box}>
                    {!ready ? <Spinner />:
                    (<div>
                           <h1 onClick={ this.jumpTo }>{title}</h1>
                           <div>Created at: {createdTime}</div>
                           <hr/>
                           {this.renderTags(style, tags)}
                           <div className={className} dangerouslySetInnerHTML={{__html: this.state.html}} />
                           <hr/>
                           {this.renderComment(style, comments)}
                    </div>)}
                </div>
                )
    }
}

function calColor(tag){
    return colors[tag.hashCode() % 5]
}

BlogBox.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array,
    createdTime: PropTypes.string,
    markdown: PropTypes.string.isRequired,
    comments: PropTypes.array,
    link: PropTypes.string
}

export default BlogBox;
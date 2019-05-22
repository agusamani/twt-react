import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Message from '../Message'
import './message-list.css'

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired
}

 class MessageList extends Component {
     // eslint-disable-next-line
    constructor(props) {
        super(props) 
        
    }
  render() {
        return (
            <div className='root1'>
                {this.props.messages.map(msg => {
                   return (
                       <Message 
                        key={msg.id}
                        text={msg.text}
                        picture={msg.picture}
                        displayName={msg.displayName}
                        userName={msg.userName}
                        date={msg.date}
                        numRetweets={msg.retweet}
                        numFavorites={msg.favorites}
                        onRetweet={ () => this.props.onRetweet(msg.id)}
                        onFavorite={ () => this.props.onFavorite(msg.id)}
                        onReplyTweet= { () => this.props.onReplyTweet(msg.id, msg.userName)}
                       />
                   )
                }).reverse()}
            </div>
        )
    }
}

MessageList.propTypes = propTypes

export default MessageList
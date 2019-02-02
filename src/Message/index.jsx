import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './message.css'
import moment from 'moment'

const propTypes = {
  onFavorite: PropTypes.func.isRequired,
  onRetweet:  PropTypes.func.isRequired,
  onReplyTweet: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  numFavorites: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired
}

class Message extends Component {
    
   constructor(props) {
       super(props)
        
       this.state = {
         pressFavorite: false,
         pressRetweet: false

       }

         this.onPressFavorite = this.onPressFavorite.bind(this);
         this.onPressRetweet = this.onPressRetweet.bind(this);
   }

   onPressFavorite () {
      this.props.onFavorite()
      this.setState ({
          pressFavorite: true
      })
   }

   onPressRetweet () {
    this.props.onRetweet()
    this.setState ({
        pressRetweet: true
    })
   }


   render() {
     let dateFormat = moment(this.props.date).fromNow()
     let userLink = `/user/${this.props.userName}`
     
       return (
           <div className= 'roots'>
              <div className='user'>
               <Link to = {userLink}>
                <figure>
                  <img className='avatar' alt='' src={this.props.picture} />
                </figure>
                </Link>
                <span className='displayName'>{this.props.displayName}</span>
                <span className='username'>{this.props.userName}</span>
                <span className='date'>{dateFormat}</span>
              </div>
             <h3>{this.props.text}</h3>
            <div className='buttons1'>
              <div 
                className='icon1'
                onClick={this.props.onReplyTweet}
              >
                <span className='fa fa-reply'></span>
              </div>
              <div 
                className={(this.state.pressRetweet) ? 'rtGreen' : ''}
                onClick={this.onPressRetweet}
              >
                <span className='fa fa-retweet'></span>
                 <span className='numM'>{this.props.numRetweets}</span>
              </div>
              <div 
                className={(this.state.pressFavorite) ? 'favYellow' : ''}
                onClick={this.onPressFavorite}
              >
                <span className='fa fa-star'></span>
                 <span className='numM'>{this.props.numFavorites}</span>
              </div>
            </div>
           </div>
       )
   }
}

Message.propTypes = propTypes

export default Message
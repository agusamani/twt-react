import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './profile.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    displayName:PropTypes.string.isRequired,
    userName:PropTypes.string.isRequired,
    emailAdress:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired
}

class Profile extends Component {
    render() {
        return (
            <div className='root3'>
               {// eslint-disable-next-line
               }<img className='avatar3' src={this.props.picture} />
               <span className='name3'>{this.props.displayName}</span>
               <ul className='data3'>
                <li>
                    <span className='fa fa-user'></span> {this.props.userName}
                </li>
                <li>
                    <span className='fa fa-envelope'></span> {this.props.emailAdress}
                </li>
                <li>
                    <span className='fa fa-map-marker'></span> {this.props.location}
                </li>

               </ul>
            </div>
        )
    }
}

Profile.propTypes = propTypes

export default Profile
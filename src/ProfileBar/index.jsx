import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom'

import './profile-bar.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

class ProfileBar extends Component {
   // eslint-disable-next-line
   constructor() {
       super()
   }

   render() {
       return (
           <div className='root2'>
            <Link to='/profile'>
             <figure>
                <img className='avatar' alt=''src={this.props.picture} />
             </figure>
             </Link>
              <span className='username'>Hola @{this.props.userName}!</span>
               <button onClick={this.props.onOpenText} className='button'>
                <span className='fa fa-lg fa-edit'></span> Tweet!
               </button>
               <button onClick={this.props.onLogout} className='button'>
                 <span className='fa fa-sign-out'></span> Salir
               </button>

           </div>
       )
   }
}

ProfileBar.propTypes = propTypes

export default ProfileBar
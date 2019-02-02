import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './login.css'

const propTypes = {
    onAuth: PropTypes.func.isRequired
}

class Login extends Component {
    render() {
        return (
        <div className='rootLogin'>
         <p className='textLogin'>
          Necesitamos que inicies seseion con tu cuenta de GitHub para que puedas leer y escribir mensajes.
         </p>
          <button 
            onClick={this.props.onAuth} 
            className='buttonLogin'
          >
             <span class='fa fa-github'></span>Login con GitHub
          </button>
        </div> 
        )
    }
}

Login.protoTypes = propTypes

export default Login



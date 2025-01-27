import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'normalize-css'
import firebase from 'firebase'

import Header from './Header'
import Main from './Main'
import './app.css'
import  Profile from './Profile'
import Login from './Login'






class App extends Component {
  constructor () {
    super()
   
    this.state = {
      user: null
    }
    this.handleOnAuth = this.handleOnAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

    componentWillMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState( { user: user})
        } else {
          this.setState ( { user: null })
        }
      })
    }
  

    handleOnAuth() {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)

    .then( result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
    }

    handleLogout() {
      firebase.auth().signOut()
      .then( () => console.log('Te has desconectado correctamente'))
      .catch( () => console.error('Un Error ocurrió.'))
    }
  
  render() {
    return (
      
      <Router>
        
        <div>
             <Header />

             <Route exact path= '/' render={ () => {
               if (this.state.user) {
                 return (
                  <Main 
                      user={this.state.user}
                      onLogout={this.handleLogout}
                  />
                 )
               } else {
                  return (
                 <Login onAuth={this.handleOnAuth} />
                  )}
             }} />      

             <Route path='/profile' render= { () => {
               return(
                <Profile 
                  picture={this.state.user.photoURL}
                  userName={this.state.user.email.split('@')[0]}
                  displayName={this.state.user.displayName}
                  location={this.state.user.location}
                  emailAdress={this.state.user.email}
                />
               )
             }} />     

             <Route path='/user/:username' render={ ({ params }) => {
                return(
                  <Profile   
                     displayName={params.userName}
                     userName={params.userName}
                  />
                )
             }} />
        </div>
      </Router>
      
    );
  }
}

export default App

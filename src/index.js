import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import * as serviceWorker from './serviceWorker';
import App from './App';

firebase.initializeApp ({
  apiKey: "AIzaSyBkfy1qoMsgHaDWsDgJGErY1ne9cmoizRA",
  authDomain: "curso-react-6a8d1.firebaseapp.com",
  databaseURL: "https://curso-react-6a8d1.firebaseio.com",
  projectId: "curso-react-6a8d1",
  storageBucket: "curso-react-6a8d1.appspot.com",
  messagingSenderId: "26571054967"
})
 







ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

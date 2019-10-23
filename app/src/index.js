import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import app from 'firebase/app';

// TODO Export this
const config = {
  apiKey: "AIzaSyBQD8M7m3FlAQMWIuiauN-NSUoqyV-AAr4",
  authDomain: "trackr-1c7e5.firebaseapp.com",
  databaseURL: "https://trackr-1c7e5.firebaseio.com",
  projectId: "trackr-1c7e5",
  storageBucket: "trackr-1c7e5.appspot.com",
  messagingSenderId: "291777275062",
  appId: "1:291777275062:web:82f12b38e3b3f65cd33217"
};

const firebase = app.initializeApp(config);

ReactDOM.render(
  <App firebase={firebase} />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

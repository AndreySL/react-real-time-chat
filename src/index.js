import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBlSbQ51JJGSdF6cdnXDDxwi34X7bt59X4',
  authDomain: 'react-chat-c54d2.firebaseapp.com',
  projectId: 'react-chat-c54d2',
  storageBucket: 'react-chat-c54d2.appspot.com',
  messagingSenderId: '756714806055',
  appId: '1:756714806055:web:76bd8a7ef4988555bb2702',
  measurementId: 'G-LE1565V3RF',
});

export const Context = createContext(null);

const firestore = firebase.firestore();
const auth = firebase.auth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      firebase,
      firestore,
      auth,
    }}>
    <App />
  </Context.Provider>,
);

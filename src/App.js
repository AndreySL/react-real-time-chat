import React, { useContext } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { Context } from './index';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader';

const App = () => {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    );
  }
};

export default App;

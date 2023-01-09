import React, {useContext} from 'react';
import {Container, Grid, Box, Button} from '@mui/material';
import {Context} from '../index';
import firebase from 'firebase/compat/app';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const Login = () => {
  const {auth} = useContext(Context);
  

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  };

  return (
    <Container>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{height: window.innerHeight - 50}}>
        <Grid
          sx={{width: 400, background: 'lightgray'}}
          container
          alignItems={'center'}
          flexDirection={'column'}>
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

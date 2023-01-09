import {AppBar, Toolbar, Grid, Button} from '@mui/material';
import React, {useContext} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {NavLink} from 'react-router-dom';
import {Context} from '../index';
import {LOGIN_ROUTE} from '../utils/consts';

const Navbar = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar color={'secondary'} position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={'flex-end'}>
          {user && (
            <Button variant="outlined" onClick={() => auth.signOut()}>
              Выйти
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

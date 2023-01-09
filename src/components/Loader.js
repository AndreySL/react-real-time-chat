import { Container, Grid } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{height: window.innerHeight - 50}}>
        <Grid container alignItems={'center'} flexDirection={'column'}>
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;

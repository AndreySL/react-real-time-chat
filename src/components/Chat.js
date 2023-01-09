import {Container, Grid, TextField, Button, Avatar} from '@mui/material';
import firebase from 'firebase/compat/app';
import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '../index';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Loader from './Loader';

const Chat = () => {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt'),
  );

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue('');
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Container>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={{height: window.innerHeight - 50}}>
          <div
            style={{
              width: '80%',
              height: '70vh',
              border: '1px solid gray',
              overflowY: 'auto',
            }}>
            {messages.map((message) => (
              <div
                style={{
                  margin: 10,
                  border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                  marginLeft: user.uid === message.uid ? 'auto' : '10px',
                  width: 'fit-content',
                  padding: 5
                }}>
                <Grid container>
                  <Avatar src={message.photoURL} />
                  <div>{message.displayName}</div>
                </Grid>
                <div>{message.text}</div>
              </div>
            ))}
          </div>
          <Grid
            container
            flexDirection={'column'}
            alignItems={'flex-end'}
            style={{width: '80%', marginBottom: 15}}>
            <TextField
              maxRows={2}
              fullWidth
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button style={{marginTop: 10}} variant="outlined" onClick={sendMessage}>
              Отправить
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
};

export default Chat;

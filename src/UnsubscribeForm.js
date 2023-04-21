import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import logo from './img/IMS_logo.png';

const UnsubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [spamButtonVisible, setSpamButtonVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 200) {
      setMessage('You have successfully unsubscribed.');
      setSpamButtonVisible(true); // Show the spam button
    } else {
      setMessage('Error unsubscribing, please try again.');
    }
  };

  const handleSpamButtonClick = () => {
    setMessage(
      'You have marked this email as spam, you may now close this window.'
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth='sm'>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={logo}
                alt='IMS Logo'
                style={{ maxWidth: '60%', marginBottom: '25px' }}
              />
            </Box>
            <Typography variant='h4' component='h1' gutterBottom>
              Unsubscribe
            </Typography>
            <Typography variant='body1' gutterBottom>
              If you no longer wish to receive these emails, enter your email
              address below and we will happily remove you from our list.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                label='Email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin='normal'
              />
              <Typography variant='body2' gutterBottom>
                Please keep in mind we pay generous finders fees, to you or to a
                charity of your choice, in the event you refer someone who is
                hired.
              </Typography>
              <Button
                fullWidth
                type='submit'
                variant='contained'
                sx={{
                  marginTop: 2,
                  backgroundColor: '#094975',
                  '&:hover': {
                    backgroundColor: '#05304d',
                  },
                }}
              >
                Unsubscribe
              </Button>
            </form>
            {message && (
              <Typography
                variant='body1'
                component='p'
                gutterBottom
                sx={{ marginTop: 2 }}
              >
                {message}
              </Typography>
            )}

            {spamButtonVisible && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 2,
                }}
              >
                <Typography variant='body1'>
                  Would you also like to mark this email as spam?
                </Typography>
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#094975',
                    '&:hover': {
                      backgroundColor: '#05304d',
                    },
                  }}
                  onClick={handleSpamButtonClick}
                >
                  Yes
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default UnsubscribeForm;

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, css, ThemeProvider } from '@mui/material/styles';
import { StyledButton } from './styles';

const URL =
  'https://kimmelandcompany.us17.list-manage.com/subscribe/post?u=3874ea4d5c9a56f0dd4bfe86a&amp;id=f7f1c4a0f1&amp;f_id=00d95be0f0';

const theme = createTheme();

export const EmailSignup = () => {
  const handleButtonClick = () => {
    fetch('KC-Booklet.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'KC-Booklet.pdf';
        alink.click();
      });
    });
  };

  return (
    <MailchimpSubscribe
      url={URL}
      render={({ subscribe, status, message }) => {
        return (
          <ThemeProvider theme={theme}>
            <Box>
              <CssBaseline />
              <Box
                css={css`
                  background: #ffffff;
                  padding: 20px;
                  color: #3a3a3a;
                  font-family: Open Sans;
                  margin-top: 16px;
                `}
              >
                <Typography component='h1' variant='h5'>
                  {status === 'sending' && (
                    <span style={{ color: 'blue' }}>sending...</span>
                  )}
                  {status === 'error' && (
                    <span
                      style={{ color: 'red' }}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  )}
                  {status === 'success' && (
                    <span style={{ color: 'green' }}>Subscribed!</span>
                  )}
                  {!!!status && <span>Subscribe</span>}
                </Typography>
                {status === 'success' && (
                  <Typography>
                    Thank you. Please download your free copy
                  </Typography>
                )}
                {status === 'success' && (
                  <StyledButton
                    css={css`
                      margin-top: 16px;
                    `}
                    onClick={handleButtonClick}
                  >
                    DOWNLOAD BOOK
                  </StyledButton>
                )}
                {status !== 'success' && (
                  <Box
                    component='form'
                    onSubmit={(event) => {
                      event.preventDefault();
                      const data = new FormData(event.currentTarget);
                      subscribe({
                        EMAIL: data.get('EMAIL') as string,
                        FNAME: data.get('FNAME') as string,
                        LNAME: data.get('LNAME') as string,
                      });
                    }}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type='text'
                          autoComplete='given-name'
                          name='FNAME'
                          fullWidth
                          id='firstName'
                          label='First Name'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type='text'
                          fullWidth
                          id='lastName'
                          label='Last Name'
                          name='LNAME'
                          autoComplete='family-name'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id='email'
                          label='Email Address'
                          name='EMAIL'
                          autoComplete='email'
                          type='email'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value='allowExtraEmails'
                              color='primary'
                            />
                          }
                          required
                          label='I want to receive inspiration, marketing promotions and updates via email.'
                        />
                      </Grid>
                    </Grid>
                    <Box
                      css={css`
                        margin-top: 24px;
                      `}
                    >
                      <StyledButton type='submit'>Sign Up</StyledButton>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </ThemeProvider>
        );
      }}
    />
  );
};

export default EmailSignup;

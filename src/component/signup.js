import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} 
    </Typography>
  );
}

const theme = createTheme();

export default function SignUpSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ 
        height: '85vh', 
        width: '80vw',
    }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          sx={{
            borderTopLeftRadius : '35px',
            borderBottomLeftRadius : '35px',
            backgroundColor: 'white',
            display : 'flex',
            justifyContent:'center',
            alignItems: 'center'
          }}
        >
          <img src='./signup.png' style={{
            width : '95%',
            height : '95%',
            borderRadius : '30px'
          }} />
        </Grid>
        <Grid item xs={12} sm={6} 
        component={Paper} elevation={6} square sx={{
              borderTopRightRadius : '30px',
              borderBottomRightRadius : '30px',
              boxShadow: 'none',
        }}>
          <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems:'center',
                my : 0
            }}
          >
           <div style={{
               my: 8,
               mx: 4,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               width: '55%'
           }}>
            <Typography component="h5" variant="h5" sx={{
              fontWeight: '500'
            }}>
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ 
                mt: 5, 
                display: 'flex',
                flexDirection : 'column',
                alignItems : 'flex-start',
                width: '100%' }}>
            <FormControl sx={{width : '100%'}} variant="outlined">
                <OutlinedInput
                    placeholder="Full Name"
                    required
                    fullWidth
                    id="name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    size="normal"
                />
                <OutlinedInput
                sx={{
                    marginTop: '1rem'
                }}
                    placeholder="Email Address"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <OutlinedInput
                sx={{
                    marginTop: '1rem'
                }}
                    placeholder="Mobile No"
                    required
                    fullWidth
                    id="mobile"
                    name="mobile"
                    autoComplete="mobile"
                    autoFocus
                />
            </FormControl>
            <div style={{
                display: 'flex',
                marginTop : '1rem'
            }}>
                <Typography variant="caption" component="caption"
                sx={{
                    color: 'black',
                    mr: 0.5
                }}>
                You are agreeing to the
                </Typography>
                <Link href="#" variant="caption" underline="none"
                sx={{
                    fontWeight : 500
                }}>
                    {"Terms of Services"}
                  </Link>
            </div>
            <div style={{
                display: 'flex'
            }}>
                <Typography variant="caption" component="caption"
                sx={{
                    color: 'black',
                    mr: 0.5
                }}>
                and
                </Typography>
                <Link href="#" variant="caption" underline="none"
                sx={{
                    fontWeight : 500
                }}>
                    {"Privacy Policy"}
                  </Link>
            </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 4, backgroundColor:'#0066cc' }}
              >
                Get Started
              </Button>
            </Box>
            </div> 
            <div style={{
                display: 'flex'
            }}>
                <Typography variant="caption" component="caption"
                sx={{
                    color: 'black',
                    mr: 0.5
                }}>
                Already a member?
                </Typography>
                <Link href="#" variant="caption" underline="none"
                sx={{
                    fontWeight : 500
                }}>
                    {"Sign in"}
                  </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
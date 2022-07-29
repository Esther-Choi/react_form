import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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

export default function SignInSide() {
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
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(./image.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopLeftRadius : '30px',
            borderBottomLeftRadius : '30px',
            flexBasis: '50% !important'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
              borderTopRightRadius : '30px',
              borderBottomRightRadius : '30px',
              boxShadow: 'none',
              flexBasis: '50% !important',
              maxWidth: '50% !important'
        }}>
          <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems:'center',
                pt: '90px',
                my : 0
            }}
          >
           <div style={{
               my: 8,
               mx: 4,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               width: '100%'
           }}>
            <Avatar alt="Remy Sharp" src="./logo.webp" 
            sx={{
                m: 2, bgcolor: 'rgb(242, 242, 242,0.4)', width: '60px', height : '60px', border: '1px solid #f2f2f2',
                padding: '0.5rem'
            }}/>
            <Typography component="h4" variant="h4">
              Hello Again!
            </Typography>
            <Typography component="body2" variant="body2" sx={{
                color: '#bfbfbf',
                textAlign: 'center',
                marginTop : '0.8rem'
            }}>
              Aliquam consectetur et tincidunt praesent enim massa<br/> pellentesque velit odio neque
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ 
                mt: 5, 
                display: 'flex',
                flexDirection : 'column',
                alignItems : 'center',
                width: '55%' }}>
            <FormControl sx={{width : '100%'}} variant="outlined">
                <OutlinedInput
                    placeholder="Email"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="normal"
                    endAdornment={<InputAdornment position="end"><AlternateEmailIcon/></InputAdornment>}
                />
                <OutlinedInput
                sx={{
                    marginTop: '1rem'
                }}
                    placeholder="Password"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                    endAdornment={<InputAdornment position="end"><LockOutlinedIcon/></InputAdornment>}
                />
            </FormControl>
            <div style={{
                width : '100%',
                display : 'flex',
                justifyContent : 'space-between',
                alignItems: 'center'
            }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" size="small" />}
                label="Remember me"
              />
              <Link href="#" variant="caption" underline="none">
                    {"Recovery Password"}
                  </Link>
                {/* <Button variant="text" sx={{fontSize: '0.4rem'}}>Recovery Password</Button> */}
            </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, backgroundColor:'#0066cc' }}
              >
                Login
              </Button>
              <Button variant="outlined"
                fullWidth
                variant="contained"
                size="large"
                sx={{ 
                    mt: 2, 
                    mb: 2, 
                    backgroundColor:'white',
                    border: '1px solid #e6e6e6',
                    color: '#b3b3b3',
                    ':hover': {
                        bgcolor: 'white',
                        color: '#b3b3b3',
                        border: '1px solid #0066cc'
                      }
                }}
              >
              <Avatar alt="Remy Sharp" src="./google.png" 
              sx={{ 
                width: 20, 
                height: 20 , 
                mr: '0.5rem'
                }}/>Sign In with Google
                </Button>
            </Box>
            </div> 
            <div style={{
                display: 'flex'
            }}>
                <Typography variant="caption" component="caption"
                sx={{
                    color: '#b3b3b3',
                    mr: 1
                }}>
                Don't have an account yet?
                </Typography>
                <Link href="#" variant="caption" underline="none"
                sx={{
                    fontWeight : 500
                }}>
                    {"Sign up"}
                  </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
import * as React from 'react';
import {useRef, useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
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
import AuthContext from '../AuthProvider';
import CloseIcon from '@mui/icons-material/Close';
import axios from '../api/axios';
const LOGIN_URL = '/auth/login';
const PROFILE_URL = '/auth/profile';

const theme = createTheme();

export default function SignInSide() {
  const {setAuth} = React.useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  //아이디
  const [user, setUser] = useState('');
  //패스워드
  const [pwd, setPwd] = useState('');
  //에러메세지
  const [errMsg, setErrMsg] = useState('');
  //로그인 성공여부
  const [success, setSuccess] = useState(false);

  //페이지 로딩시 userRef에 포커스
  useEffect(()=> {
    userRef.current.focus();
  }, []);

  // user/pwd에 변화가 있을 시 errMsg 리셋
  useEffect(()=> {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      //rest api 로그인 요청
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({
          "email" : user, 
          "password" : pwd
        }), 
        {
          headers: { 'Content-Type' : 'application/json'},
          // withCredentials : true
        }
      );
      console.log(JSON.stringify(response?.data))
      // 로그인 토큰
      const accessToken = response?.data?.accessToken;

      const response2 = await axios.get(PROFILE_URL, 
        {
          headers: { 'Authorization' : 'Bearer '+ accessToken},
          withCredentials : true
        }
      );
      //유저 정보 저장
      setAuth({accessToken});
      setUser('')
      setPwd('');
      setSuccess(true);

    } catch(err) {

      //response 없이 에러가 난 경우 (서버에러)
      if (!err?.response){
        setErrMsg('서버 점검 중 입니다. 잠시 후 다시 시도해주세요');
      }else if (err.response?.status === 403){
        setErrMsg('아이디와 비밀번호를 다시 확인해 주세요.');
      }else {
        setErrMsg('로그인에 실패하였습니다.')
      }
    }

  }

  return (
    <>
      {success ? (
        <section>
          <h1>안녕하세요!</h1>
          <br />
          <p>
            <a href="/">Sign Up</a>
          </p>
        </section>
      ) : (
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
            flexBasis: '50% !important',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
              borderTopRightRadius : '30px',
              borderBottomRightRadius : '30px',
              boxShadow: 'none',
              flexBasis: '50% !important',
              maxWidth: '50% !important',
              height : '100%'
        }}>
          <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems:'center',
                pt: '70px',
                my : 0,
                position : 'relative',
                paddingBottom : '1.7rem'
            }}
          >
            <Collapse in={errMsg != ""} 
            sx={{
              position:'absolute',
              top: '40px'
            }}>
            <Alert severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrMsg('')
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            >{errMsg}</Alert></Collapse>
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
                    ref={userRef}
                    onChange={(e)=> setUser(e.target.value)}
                    value={user}
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
                    ref={userRef}
                    onChange={(e)=> setPwd(e.target.value)}
                    value={pwd}
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
                <Link href="/" variant="caption" underline="none"
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
    )} 
    </>
  );
}
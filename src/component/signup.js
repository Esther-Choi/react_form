import * as React from 'react';
import {useRef, useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import axios from '../api/axios';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import { height } from '@mui/system';



const theme = createTheme();

const JOIN_URL = '/user'

export default function SignUpSide() {

  const userRef = useRef();

    //아이디
    const [user, setUser] = useState('');
    //패스워드
    const [pwd, setPwd] = useState('');
    //이름
    const [name, setName] = useState('');
    //모바일
    const [mobile, setMobile] = useState('');
    //에러메세지
    const [errMsg, setErrMsg] = useState('');
    //로그인 성공여부
    const [success, setSuccess] = useState(false);

    useEffect(()=> {
      userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
    try{
        if(name == "" || user == "" || mobile == "" || pwd == ""){
          setErrMsg('정보를 모두 입력해주세요.')
          return false;
        }
        //rest api 로그인 요청
        const response = await axios.post(JOIN_URL, 
          JSON.stringify({
            "email" : user, 
            "password" : pwd,
            "name" : name,
            "mobile" : mobile
          }), 
          {
            headers: { 'Content-Type' : 'application/json'},
          }
        );
        setUser('')
        setPwd('');
        setName('');
        setMobile('')
        setSuccess(true);
        
      } catch(err) {
        setErrMsg('회원가입에 실패하였습니다.');
      }
    }

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
            alignItems: 'center',
            height: '100%'
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
                my : 0,
                position: 'relative'
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
             <Collapse in={success} 
            sx={{
              position:'absolute',
              top: '40px'
            }}>
            <Alert severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setSuccess(false)
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            >회원가입이 성공적으로 완료되었습니다.</Alert></Collapse>
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
                    ref={userRef}
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
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
                    ref={userRef}
                    onChange={(e)=> setUser(e.target.value)}
                    value={user}
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
                    ref={userRef}
                    onChange={(e)=> setMobile(e.target.value)}
                    value={mobile}
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
                sx={{ mt: 4, backgroundColor:'#0066cc'}}
              >
                Get Started
              </Button>
            </Box>
            </div> 
            <div style={{
                display: 'flex',
                paddingTop: '1.7rem'
            }}>
                <Typography variant="caption" component="caption"
                sx={{
                    color: 'black',
                    mr: 0.5
                }}>
                Already a member?
                </Typography>
                <Link href="/signIn" variant="caption" underline="none"
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
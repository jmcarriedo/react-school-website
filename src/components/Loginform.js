import React from 'react'
import { DataContext } from '../components/DataProvider';
import styled from "styled-components";
import { FaFacebookSquare, FaGoogle} from 'react-icons/fa';
import { TextField, Typography, Button } from "@material-ui/core";
import {Container} from './Landing Page/LandingElements';
import DataProvider from '../components/DataProvider';
import List from '../components/List';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer';
import Header from './Dashboard/Header';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


const Loginform = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [authorize, setAuthorize] = React.useState(false)
    
    const [open, setOpen] = React.useState(false);

    const [state, setState] = React.useState({
      open: true,
      vertical: 'top',
      horizontal: 'center',
    });
  
    const { vertical, horizontal} = state;
  
    const submitForm = (e) => {
      e.preventDefault();
      
      if (username === 'admin' && password === '1234') {
        setAuthorize(true)
        setOpen(false)
      } else {
        setOpen(true)
      }
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };


    if(authorize === false) {return (
      
      <><Sidebar />
      <Container>
        <BoxForm>
          <form className='col-8 p-4 form'>
              <Typography className='mt-2 mb-5 fs-1' variant="h5" style={{ color:'midnightblue'}}>
                Login
              </Typography>
              <TextField
                placeholder="Username"
                fullWidth
                className="mb-4 form-input"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <TextField
                placeholder="Password"
                fullWidth
                className="form-input mb-4"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="form-input"
                size="large"
                onClick={submitForm}
              >
                Login
              </Button>
              <p className='mt-4' style={{fontSize: 'min(max(1.7rem, 4vw), 14px)'}}>Or sign-in with</p>
              <BoxIcons>
                  <span style={{width:'50px', fontSize: 'min(max(1.7rem, 4vw), 28px)',}}> <Facebook /></span>
                  <span style={{width:'50px', fontSize: 'min(max(1.7rem, 4vw), 25px)',}}> <Google /></span>
              </BoxIcons>  
          </form>
        </BoxForm>
        </Container>
        <Footer />

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
          <Alert onClose={handleClose} severity="error" variant="filled">
            <span style={{marginLeft:'162px'}}>Admin access only</span>
          </Alert>
        </Snackbar>
      
        </>
    );

  } else {
      return (
        <>
       <Header />
        <div style={{
          margin:'50px auto',
        }}>
          <DataProvider>
              <List />
          </DataProvider>
        </div>

        </>
      )
  }
};




export default Loginform;

export const BoxForm= styled.div`
margin: auto;
width: 320px;
height: 500px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #2980B9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: #fceabb;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f8b500, #fceabb);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #f8b500, #fceabb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
box-shadow: 10px 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 30px;
@media (max-width: 768px) {
  margin: 20px;
  width: 400px;
}
`;

export const LogButton = styled.button`
background: #213472;
color: #fff;
&:hover {
  background: tomato;
	color: #fff;
}
`;

export const BoxIcons= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Facebook = styled(FaFacebookSquare)`
color: #213472;
&:hover {
	color: #f87339;
}
`;
export const Google = styled(FaGoogle)`
color: #213472;
&:hover {
	color: #f87339;
}
`;

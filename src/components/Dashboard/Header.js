import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import logo from './logo.png';


const useStyles = makeStyles((theme) => ({
    root: {

    },
    menuButton: {
      widht: 100,
    },
    title: {
     
    },
  }));

function Header() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <span style={{width:'50px',marginRight:'10px'}}><img src={logo} alt='' /></span>
            <Typography variant="h6" className={classes.title}>
              Admin Dashboard
            </Typography>
            <Button color="inherit" 
            className='btn btn-dark' 
            style={{width:'100px'}}>
              <Link to='/index' style={{textDecoration:'none',color:'white'}}>
                Logout
              </Link>
            </Button> 
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Header;
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Notif=styled.div`
background: dodgerblue;
background: midnightblue;
margin: 20px 0 0 0;
padding: 20px 0;
`;
export const Message=styled.div`
color: #fff;
text-align: center;
width: 100%;
`;

const Info = () => {
    const [state, setState] = React.useState({
        open: true,
        vertical: 'bottom',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = (event, reason) => {
        setState({ ...state, open: false });
      };
  
      return (
        <div>
         
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="SAFETY FIRST  We're taking extra measures to ensure your children are safe in our nursery."
            key={vertical + horizontal}
          > 
          <Notif>
                <Message>
                    <InfoIcon />
                    SAFETY FIRST! We're taking extra measures to ensure your children are safe in our daycare.
                </Message>
            </Notif>
          </Snackbar>
        </div>
      );
}

export default Info

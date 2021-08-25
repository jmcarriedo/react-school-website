import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaPinterestP } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'between',
          alignItems: 'center',
          height: '10vh',
          width: '100%',
          overflowX: 'hidden',
          background: '#fef5ed',
          border: '1px solid #4692d8',
          padding: '0.2rem calc((100vw - 1300px) / 2)',
        }}
      >

          <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fef5ed',
            fontSize: 'calc(6px + 1vmin)',
            color: '#213472',
            width: '150%',
            padding: '20px',
            marginLeft: '20px',
            textAlign: 'center',
          }}>
            © 2021 Little Rainbows Childcare. Created by KodeGo Group 10.
          </div>
          <div>
            
          </div>
          <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'calc(14px + 1vmin)',
            color: '#213472',
            padding: '10px',
            marginRight: '10px',
          }}>
            <span style={{width:'50px'}}> <Facebook /></span>
            <span style={{width:'50px'}}> <Instagram /></span>
            <span style={{width:'50px'}}> <Pinterest /></span>
            <span style={{width:'50px'}}> <Google /></span>
          </div>
      </div>
    )
}

export default Footer;

export const Facebook = styled(FaFacebook)`
&:hover {
	color: #f87339;
}
`;
export const Instagram = styled(FaInstagram)`
&:hover {
	color: #f87339;
}
`;
export const Pinterest = styled(FaPinterestP)`
&:hover {
	color: #f87339;
}
`;
export const Google = styled(FaGoogle)`
&:hover {
	color: #f87339;
}
`;
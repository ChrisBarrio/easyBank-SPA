import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



const ColorButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    borderRadius:'10px',
    lineHeight: 1.5,
    backgroundColor:'#00b09b',    
    '&:hover': {
      backgroundColor:'#fff',
      color:'#000'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00b09b',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
export default function CustomizedButtons() {
  return (
      <ColorButton variant="contained">Request Invite</ColorButton>
  );
}


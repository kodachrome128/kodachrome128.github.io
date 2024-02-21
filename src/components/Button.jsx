import React from 'react';

const style = {
  display: 'flex',
  textDecoration: 'none',
  textAlign: 'center',
  alignItems: 'center',
  backgroundColor: 'grey',
  justifyContent: 'left',
  gap: '5px',
  maxWidth: '250px',
  borderRadius: '8px',
  padding: '0 5px 0 5px',
  marginTop: '10px',
  padding: '0 5px 0 5px',
  fontFamily: 'IBMPlexMono-Regular',
  fontColor: 'white',
  fontSize: '12px',
  border: 'none',
  outline: 'none',
  color: 'white',
  cursor: 'pointer',
  };

const Button = ({ children, onClick }) => {


  return (
    <button style={style} onClick={onClick}>
        {children}
    </button>    
  );
};

export default Button;
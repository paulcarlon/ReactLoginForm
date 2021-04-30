import React from 'react';

const LoginButton = () => {
  let onClick = () => {
    console.log('Destination not found!');
  };
  return (
    <div>
      <button
        onClick={onClick}
        className='login'
        style={{
          backgroundColor: 'purple',
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          fontSize: '1.6rem',
          padding: '1.5rem 3rem',
          border: '0',
          borderRadius: '.5em',
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;

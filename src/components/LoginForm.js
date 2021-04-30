import React from 'react';
import LoginButton from './LoginButton';

const LoginForm = () => {
  let showPassword = () => {
    let passwordInput = document.querySelector('#password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '70vh',
      }}
    >
      <h3
        style={{
          padding: '20px 80px',
          backgroundColor: 'rgba(50, 0, 90, 0.4',
          color: '#fff',
        }}
      >
        Login
      </h3>
      <p style={{ color: '#fff' }}>Username</p>
      <input
        type='text'
        placeholder='Enter your username'
        style={{
          borderRadius: '6px',
          border: '0',
          height: '30px',
          backgroundColor: 'lavender',
          color: 'purple',
          width: '250px',
          textAlign: 'center',
          marginBottom: '1em',
        }}
      />
      <p style={{ color: '#fff' }}>Password</p>
      <input
        id='password'
        type='password'
        placeholder='Enter your password'
        style={{
          borderRadius: '6px',
          border: '0',
          height: '30px',
          backgroundColor: 'lavender',
          color: 'purple',
          width: '250px',
          textAlign: 'center',
        }}
      />
      <div style={{ display: 'flex' }}>
        <p style={{ fontSize: '.8em', color: '#fff' }}>Show Password:</p>
        <input
          type='checkbox'
          style={{ transform: 'translateY(80%)', backgroundColor: '#000' }}
          onClick={showPassword}
        ></input>
      </div>
      <LoginButton />
    </div>
  );
};

export default LoginForm;

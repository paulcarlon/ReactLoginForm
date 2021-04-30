import './App.css';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import Logo from './components/Logo';

function App() {
  return (
    <div className='App'>
      <Logo />

      <Navigation />
      <div
        style={{
          display: 'inline-block',
          border: '2px solid white',
          backgroundColor: '#c088b6',
          borderRadius: '6px',
          width: '400px',
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
}

export default App;

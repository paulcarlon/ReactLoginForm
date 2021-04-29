import './App.css';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <div className='App'>
      <Logo />

      <Navigation />
      <LoginForm />
      <LoginButton />
    </div>
  );
}

export default App;

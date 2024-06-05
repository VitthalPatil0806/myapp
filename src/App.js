
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SignInForm from './components/SignInForm';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/login' Component={LoginForm}></Route>
        <Route path='/signup/:paraobj' Component={SignInForm}></Route>
      </Routes>
    </div>
  );
}

export default App;

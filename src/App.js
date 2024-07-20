import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/singup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:token" component={ResetPassword} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

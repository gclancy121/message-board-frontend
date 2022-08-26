import React from 'react';

import {Route, Routes} from 'react-router-dom';

import LoginForm from './components/Login';
import SiteHeader from './components/SiteHeader';
import LandingPage from './components/LandingPage';
import RegisterForm from './components/Register';

import './css/App.css'

const App = (props) => {
  return (
    <div>
      <nav>
        <SiteHeader />
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/register' element={<RegisterForm/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

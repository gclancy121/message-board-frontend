import React from 'react';

import {Route, Routes} from 'react-router-dom';


import PrivateRoutes from './utils/PrivateRoutes';
import LoginForm from './components/Login';
import SiteHeader from './components/SiteHeader';
import LandingPage from './components/LandingPage';
import RegisterForm from './components/Register';
import Profile from './components/Profile';

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
          <Route element={<PrivateRoutes />}>
            <Route element={<Profile />} path='/profile'/>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;

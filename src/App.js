import React from 'react';

import {Route, Routes} from 'react-router-dom';


import PrivateRoutes from './utils/PrivateRoutes';
import LoginForm from './components/auth/Login';
import SiteHeader from './components/SiteHeader';
import LandingPage from './components/LandingPage';
import RegisterForm from './components/auth/Register';
import Profile from './components/auth/Profile';
import AllWaifus from './components/waifus/allWaifus';
import AccountSettings from './components/auth/AccountSettings';

import './css/App.css'

const App = () => {
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
            <Route element={<AllWaifus />} path='/waifus' exact/>
            <Route element={<AccountSettings />} path='/settings' />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;

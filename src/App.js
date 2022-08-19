import React from 'react';

import {Route, Routes} from 'react-router-dom';

import LoginForm from './components/Login';
import SiteHeader from './components/SiteHeader';
import LandingPage from './components/LandingPage';

import './css/App.css'

const App = (props) => {
  return (
    <div>
      <nav>
        <SiteHeader />
      </nav>
      <div>
        <Routes>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

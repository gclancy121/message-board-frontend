import React, {useEffect, useState} from 'react';

import {Route, Routes, Redirect} from 'react-router-dom';

import LoginForm from './components/Login';

import axios from 'axios';

const App = (props) => {
  return (
    <div>
      <nav className="head-navbar">
        <span><h1>Weeb Central</h1></span>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

import React from 'react';

import {Route, Routes} from 'react-router-dom';

//PageEmpty
import PageEmpty from './components/PageEmpty';

//PrivateRoutes
import PrivateRoutes from './utils/PrivateRoutes';
//Profile related routes
import Profile from './components/auth/Profile';
import AccountSettings from './components/auth/AccountSettings';
//Waifu related routes
import AllWaifus from './components/waifus/allWaifus';
import AddWaifu from './components/waifus/addWaifu';
import AdditionalInfo from './components/waifus/additionalInformation';
import WaifuSearch from './components/waifus/waifuSearch';

//Registration & Login
import LoginForm from './components/auth/Login';
import RegisterForm from './components/auth/Register';

//Landing Pages & Header
import SiteHeader from './components/SiteHeader';
import LandingPage from './components/LandingPage';
import Complaint from './components/non-user-actions/Complaint';

import './css/App.css'


const App = () => {
  return (
    <div>
      <nav>
        <SiteHeader />
      </nav>
      <div>
        <Routes>
          <Route path='*' element={<PageEmpty />} />
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/complaints' element={<Complaint />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Profile />} path='/profile'/>
            <Route element={<AllWaifus />} path='/waifus' exact/>
            <Route element={<AccountSettings />} path='/settings' />
            <Route element={<AddWaifu />} path='/waifus/add-waifu' />
            <Route element={<AdditionalInfo />} path='/waifus/id=:id' />
            <Route element={<WaifuSearch />} path='/waifus/search-waifu' />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;

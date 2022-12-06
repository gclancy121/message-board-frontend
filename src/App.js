import React from 'react';

import {Route, Routes} from 'react-router-dom';

//PageEmpty
import PageEmpty from './components/PageEmpty';

//PrivateRoutes
import PrivateRoutes from './utils/PrivateRoutes';

//Profile related routes
import Profile from './components/auth/Profile';
import AccountSettings from './components/auth/AccountSettings';
import AccountDeletion from './components/auth/AccountDeletion';

//Waifu related routes
import AllWaifus from './components/waifus/allWaifus';
import AddWaifu from './components/waifus/addWaifu';
import AdditionalInfo from './components/waifus/additionalInformation';
import WaifuSearch from './components/waifus/waifuSearch';
import UpdateWaifu from './components/waifus/updateWaifu';

//Message board related routes
import AllPosts from './components/posts/allPosts';
import PostInformation from './components/posts/postInformation';
import AddPost from './components/posts/addPost';

//Registration & Login
import LoginForm from './components/auth/Login';
import RegisterForm from './components/auth/Register';
import PasswordReset from './components/auth/PasswordReset';
import PasswordReset2 from './components/auth/PasswordReset2';

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
          <Route path='/password-reset' element={<PasswordReset />} />
          <Route path='/password-reset-2' exact element={<PasswordReset2 />} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/complaints' element={<Complaint />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<AllPosts />} path='/posts' />
            <Route element={<PostInformation />} path='/posts/:id' exact />
            <Route element={<AddPost />} path='posts/add-post' exact/>
            <Route element={<Profile />} path='/profile'/>
            <Route element={<AllWaifus />} path='/waifus' exact/>
            <Route element={<AccountSettings />} path='/settings' />
            <Route element={<AccountDeletion />} path='/confirm-deletion' />
            <Route element={<UpdateWaifu />} path='waifus/update-waifu' />
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

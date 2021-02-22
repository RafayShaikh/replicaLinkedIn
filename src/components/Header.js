import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Search from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BussinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import { auth } from '../firebase';
import { logout } from '../features/userSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header_left'>
        <LinkedinIcon
          color='primary'
          style={{ fontSize: 40 }}
          className='logo_icon'
        />
        <div className='header_search'>
          <Search />
          <input type='text' placeholder='Search' />
        </div>
      </div>

      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BussinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;

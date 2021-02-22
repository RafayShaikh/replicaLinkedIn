import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';

function Siderbar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <div className='sidebar_top_background'></div>
        <Avatar src={user.photoUrl} className='sidebar_avatar'>
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_sts'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>1,500</p>
        </div>
        <div className='sidebar_sts'>
          <p>Views on post</p>
          <p className='sidebar_statNumber'>2,500</p>
        </div>
      </div>
      <div className='sidebar_button'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('cars')}
        {recentItem('programming')}
        {recentItem('java')}
        {recentItem('software')}
        {recentItem('css')}
        {recentItem('html')}
        {recentItem('nodejs')}
      </div>
    </div>
  );
}

export default Siderbar;

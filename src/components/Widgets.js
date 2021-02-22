import React from 'react';
import './Widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'Created by Rafay',
        'This website is just for practice, not for official use. Thanks'
      )}
      {newsArticle(
        'News 1',
        'This website is just for practice, not for official use. Thanks'
      )}
      {newsArticle(
        'News 2',
        'This website is just for practice, not for official use. Thanks'
      )}
      {newsArticle(
        'News 3',
        'This website is just for practice, not for official use. Thanks'
      )}
    </div>
  );
}

export default Widgets;

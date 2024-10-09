import React from 'react';
import facebookIcon from './../../images/icon-facebook.svg';
import instagramIcon from './../../images/icon-instagram.svg';
import twitterIcon from './../../images/icon-twitter.svg';
import youtubeIcon from './../../images/icon-youtube.svg';
import downArrow from './../../images/icon-down.svg';
import upArrow from './../../images/icon-up.svg';
import './content.css'

const content = ({ toggle }) => {

    const data = [
        { title: 'Page Views', platform: 'facebook', value: 87, change: '3%', positive: true },
        { title: 'Likes', platform: 'facebook', value: 52, change: '2%', positive: false },
        { title: 'Likes', platform: 'instagram', value: 5462, change: '2257%', positive: true },
        { title: 'Profile Views', platform: 'instagram', value: '52k', change: '1375%', positive: true },
        { title: 'Retweets', platform: 'twitter', value: 117, change: '303%', positive: true },
        { title: 'Likes', platform: 'twitter', value: 507, change: '553%', positive: true },
        { title: 'Likes', platform: 'youtube', value: 107, change: '19%', positive: false },
        { title: 'Total Views', platform: 'youtube', value: 1407, change: '12%', positive: false }
      ];

      const platformIcons = {
        facebook: facebookIcon,
        instagram: instagramIcon,
        twitter: twitterIcon,
        youtube: youtubeIcon,
      };
    
  return (
    <div className={`wrapper ${toggle ? 'light-theme' : ''}`}>
    <div className={`Stat-dashboard ${toggle ? 'light-theme' : ''}`}>
    <h1>Overview - Today</h1>
    <div className="stats-grid">
      {data.map((stat, index) => (
        <div key={index} className={`stat-box ${toggle ? 'light-theme' : ''} ${stat.positive ? 'positive' : 'negative'}`}>
          <div className="stat-header">
            <span>{stat.title}</span>
            <span>
                 <img src={platformIcons[stat.platform]} alt={stat.platform} className='icons-social'/>
             </span>
            
            </div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-change">
          <span className={stat.positive ? 'change-up' : 'change-down'}>
                  {stat.positive ? <img src={upArrow} alt="Up arrow" className='arrowup' /> : <img src={downArrow} alt="Down arrow" className='arrowdown'/>}
                  {stat.change}
                </span>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
};

export default content;
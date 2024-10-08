import React from 'react';
import './hero.css'
import facebookIcon from './../../images/icon-facebook.svg';
import instagramIcon from './../../images/icon-instagram.svg';
import twitterIcon from './../../images/icon-twitter.svg';
import youtubeIcon from './../../images/icon-youtube.svg';
import downArrow from './../../images/icon-down.svg';
import upArrow from './../../images/icon-up.svg';

const hero = () => {
  return (
    <div className="stats-cards-container">
      <div className="stats-card " style={{ borderTopColor: '#1877F2' }}>
        <div className="header-one"  >
          <span><img src={facebookIcon} alt='facebookicon'/></span>
          <span className="handle"> @nathanf</span>
          </div>
            <div className="followers-count">
          <h2>1987</h2>
          <p>Followers</p>
            </div>
        <div className="change-today positivee">
          <span><img src={upArrow} alt='uparrow'/>12</span> Today
        </div>
      </div>
      

      <div className="stats-card" style={{ borderTopColor: '#1DA1F2' }}>
        <div className="header-one" >
          <span><img src= {twitterIcon} alt='twittericon' /> </span>
          <span className="handle">@nathanf</span>
        </div>
        <div className="followers-count">
          <h2>1044</h2>
          <p>Followers</p>
        </div>
        <div className="change-today positivee">
          <span><img src={upArrow} alt='uparrow'/>99</span> Today
        </div>
      </div>

      <div className="stats-card" style={{ borderTopColor: '#E1306C' }}>
        <div className="header-one" >
          <span><img src= {instagramIcon} alt='instagramicon' /></span>
          <span className="handle">@realnathanf</span>
        </div>
        <div className="followers-count">
          <h2>11k</h2>
          <p>Followers</p>
        </div>
        <div className="change-today positivee">
          <span><img src={upArrow} alt='uparrow'/>1099</span> Today
        </div>
      </div>

      <div className="stats-card" style={{ borderTopColor: '#FF0000' }}>
        <div className="header-one" >
          <span><img src= {youtubeIcon} alt='youtubeIcon' /></span>
          <span className="handle">Nathan F.</span>
        </div>
        <div className="followers-count">
          <h2>8239</h2>
          <p>Subscribers</p>
        </div>
        <div className="change-today negativee">
          <span><img src={downArrow} alt='downarrow'/>144</span> Today
        </div>
      </div>
    </div>
  )
}

export default hero
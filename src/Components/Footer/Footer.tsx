import React from 'react'
import './Footer.css'
import ytIcon from '../../assets/youtube_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={ytIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Gift Cards</li>
        <li>Jobs </li>
        <li>Media Centre </li>
        <li>Terms of use </li>
        <li>Legal Notices </li>
        <li>Contact Us </li>
        <li>Cookie Preference </li>
        <li>Corporate info </li>
      </ul>
      <p className='copyright-text'>Netflix India  </p>
    </div>
  )
}

export default Footer

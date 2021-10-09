import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialFollow = () => {
  return (
    <>
      <div className="contact-us-flag">
        <a href="https://www.facebook.com/acclaimedhomewarranty/" target="_blank" className="social_icons"><FaFacebook /></a>
        <a href="https://www.instagram.com/acclaimedhw/" target="_blank" className="social_icons"><FaInstagram /></a>
        <Link to={'/contact-us/'} className="desktop">Contact us</Link>
      </div>
    </>
  )
};
export default SocialFollow;
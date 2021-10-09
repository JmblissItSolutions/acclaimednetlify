import React from "react";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="left">
          <div className="business_hrs">
            <h3>Business Hours</h3>
            <li>Monday 7-6 MST</li>
            <li>Tuesday 7-6 MST</li>
            <li>Wednesday 7-6 MST</li>
            <li>Thursday 7-6 MST</li>
            <li>Friday 7-6 MST</li>
          </div>
          <div className="addr">
            <h3>Our Address</h3>
            <div>
              <div>Acclaimed Home Warranty P.O. Box 9720
                Salt Lake City, UT 84109</div>
              <div className="emrg_hrs"><a href="/make-a-claim">Emergency Hours: make a claim 24/7</a></div>
              <div className="emrg_toll"><a href="tel:8884949460">Toll-Free: 888-494-9460</a></div>
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="blueText upper">What we do.</h3>
          <p className="cormor">We help REDUCE or ELIMINATE the rising costs of home repair & replacements. We cover the major
systems inside the property. We offer a suite of plans for homeowners & real estate
professionals.</p>
        </div>
      </div>
    </>
  )
};
const FooterBottom = () => {
  return (
    <>
      <div className="botom_footer">
        <div className="inner">
          <ul>
            <li><Link to={'/order-now/'}>Order Now</Link></li>
            <li><Link to={'/resources/arizona'}>Resources</Link></li>
            <li><Link to={'/member-advantages/'}>Member Advantages</Link></li>
            <li><Link to={'/contractors/'}>Contractors</Link></li>
            <li><Link to={'/about-us/'}>About Us</Link></li>
            <li><Link to={'/make-a-claim/'}>Make A Claim</Link></li>
            <li><Link to={'/contact-us/'}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
};
export { Footer, FooterBottom };

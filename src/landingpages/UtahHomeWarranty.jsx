import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import HomeOwnerReview from '../assets/videos/Home-Owner-Review-Video.mp4'
import HomeOwnerRealtor from '../assets/videos/HomeOwner-Realtor.mp4'
import default1 from '../assets/images/default1.jpg'
import default2 from '../assets/images/default2.jpg'
import logo from '../assets/images/Acclaimed-Home-Warranty-New-Logo-2021.png';
import { Player } from 'video-react';

const UtahHomeWarranty =()=>{
    return(
        <>
        <Helmet>
            <title>Excellent Utah Home Warranty Providers</title>
            <meta name="description" content="How to Buy a Home Warranty: Custom packages, flexible pricing, highly reviewed Utah home warranty company"/>
            <meta name="keywords" content="utah acclaimed home warranty, friendly home warranty company" />
        </Helmet>
        <section className="landing_outer_section">
            <ul id="menu-landing-page-menu" className="menu">
                <li>
                    <a href="/order-now/">Acclaimed Home Warranty Home</a></li>
                <li>
                    <a href="/order-now/">See Plans for Your State</a></li>
            </ul>
            <div className="middle_section">
                <div className="content_div"><h1>NEED your A/C, Heater or some plumbing FIXED? <small>You came to the right place.</small></h1>
                </div>
                <div className="video_section">
                    <div className="container" id="vid1">
                        <Player
                            playsInline
                            poster={default1}
                            src={HomeOwnerReview}
                        />
                    </div>
                    <div className="container" id="vid2">
                        <Player
                            playsInline
                            poster={default2}
                            src={HomeOwnerRealtor}
                        />
                    </div>
                </div>
            </div>
            <div className="footer_logo">
                <img src={logo} />
            </div>
        </section>
    </>
    )
}
export default UtahHomeWarranty;
import React, { useState, useEffect } from "react";
import APIUrl from "../Api"
import { Helmet } from "react-helmet";
import brochersbanner from "../assets/images/brochers-banner.png";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ResourcePage = () => {  
    const rep = (APIUrl.defaults.assetsURL)
    const [location, setLocation] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/get_holocations`)
        setLocation(result.data);
    }, []);

    return (
        <> <Helmet>
            <title>Home Warranty Information: What do home warranty's cover, benefit guides, and more information for homeowners and real estate agents</title>
            <meta name="description" content="Protect your house with a home warranty plan with Acclaimed Home Warranty. Your Guide to Purchasing a Home Warranty in 2021" />
            <meta name="keywords" content="compare home warranty benefits plans costs, look at benefits of different types of coverage of home warranties"/>
        </Helmet>
            <div className="home_page broshure-pg">
                <div className="top_img">
                    <img src={brochersbanner} alt=" brochers-banner" />
                </div>
                <div className="brochures-text">
                    <h1>Brochures</h1>
                </div>
                <div className="resources_state">
                    <div className="state_box">
                        <h1>choose a location</h1>
                        <div className="makeStyles-paper-1">
                            {location.map(item => (
                                <>
                                    <Link className="colwidth" style={{ backgroundImage: `url(${rep}/${item.image})` }} key={item.id} to={`/resources/${item.slug}`}>{item.location_name}</Link>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ResourcePage;
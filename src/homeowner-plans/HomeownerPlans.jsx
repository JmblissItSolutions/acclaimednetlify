import React, { useState, useEffect } from "react";
import APIUrl from "../Api"
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const HomeownerPlans = () => {
  const rep = (APIUrl.defaults.assetsURL)
  const [location, setLocation] = useState([]);
    useEffect(async () => {
        const result = await APIUrl.get(`/get_holocations`)
        setLocation(result.data);
    }, []);
  return (
    <>
      <Helmet>
        <title>Acclaimed Home Warranty: Explore Home Warranty Plans for homeowners in Arizona, Utah, Idaho, Texas, and Nevada </title>
        <meta name="description" content="Acclaimed Home Warranty provides various coverage options to homeowners with different needs. Get in touch with us in for details."/>
        <meta name="keywords" content="home warranty plans, homeowner warranty, real estate transaction warranty"/>
      </Helmet>
      <div className="Home_plans">
      <div className="state_box">
                        <h1>choose a location</h1>
                        <div className="makeStyles-paper-1">
                            {location.map(item => (
                                <>
                                    <Link className="colwidth" style={{ backgroundImage: `url(${rep}/${item.image})` }} key={item.id} to={`/homeowner-plans/${item.slug}`}>{item.location_name}</Link>
                                </>
                            ))}
                        </div>
                    </div>
      </div>
    </>
  )
}

export default HomeownerPlans;
import React, { useState, useEffect } from 'react';
import APIUrl from "./Api"
import { Helmet } from "react-helmet";
import homeperfect from "./assets/images/home-perfect-bg.png";
import comparedoor from "./assets/images/compare-door-bg.png";
import { Link, BrowserRouter as Router } from "react-router-dom";
const OrderNow = () => {
  const rep = (APIUrl.defaults.assetsURL)
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await APIUrl.get(`/get_holocations`)
    setData(result.data);
  }, []);
  return (
    <>
      <Helmet>
        <title>Order a home warranty from Acclaimed Home Warranty</title>
        <meta name="description" content="Protect your home with an Acclaimed Home Warranty. Saving Homeowners thousands of dollars each year in unexpected costs related to major appliance and house systems" />
        <meta name="keywords" content="order a home warranty, where can I get a home warranty, acclaimed home warranty"/>
      </Helmet>
      <div className="home-page order-pg">
        <section id="home-perfect-plan" style={{ backgroundImage: `url(${homeperfect})` }}>
          <span className="cho_loc"><center>Choose a Plan:</center></span>
          <div className="plans" style={{ backgroundImage: `url(${comparedoor})` }}>
            <div className="inner">
              {data.map(item => (
                <div className="col-3" key={item.id} style={{ backgroundImage: `url(${rep}/${item.image})` }}>
                  <div className="perfect-cta">
                    <span className="perfect-cta__compare cormor">Compare</span>
                    <span className="perfect-cta__state">{item.location_name}</span>
                    <span className="perfect-cta__plans">Plans</span>
                  </div>
                  <div className="btn-cont">
                  <Link to={'/homeowner-plans/' + item.slug} className="btn">compare homeowner&nbsp;plans</Link>
                    <Link to={'/real-estate-orders/'} className="btn">compare real estate&nbsp;plans&nbsp;</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="bottom-boxes">
          <div className="flex-container">
            <div className="box">
              <h4>REAL ESTATE ORDERS</h4>
              <p>Whether you are a real estate agent, title officer, mortgage lender or purchasing a home we have great plans and coverages to choose from.</p>
              <p><Link to={"/real-estate-orders/"}>Click here</Link> to see your options and to easily order. Invoices will be provided to send a check to at the end of the order.</p>
              <p>If you need to pay another way, please order and email <a>hello@acclaimedhw.com</a> or chat in for payment options.</p>
              <p>Thank you for your business. </p>
            </div>
            <div className="box">
              <h4>EXISTING HOMEOWNERS or RENTALS</h4>
              <p>If you are currently living in your home, have a second home or a long-term rental, Acclaimed is here to help.</p>
              <p><Link to={"/homeowner-plans/arizona"}>Click here</Link> to see your options and to easily order & pay online.</p>
              <p>If you have questions, please feel free to chat in or email <a>hello@acclaimedhw.com</a></p>
              <p>We look forward to taking care of you. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default OrderNow;
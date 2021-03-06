import React, { useState, useEffect, useCallback } from 'react';
import APIUrl from "../Api"

const StandarFeature = ({ stateid }) => {
 // console.log(stateid)
  const [stanfeature, setstanfeature] = useState([]);
  useEffect(() => {
    const runAsync = async () => {
    const url = "/homeowner_standard_features/" + `${stateid}`
    const stanfeatures = await APIUrl.get(`${url}`)
    setstanfeature(stanfeatures.data);
  };
  runAsync();
}, []);
  
  return (
    <>
      <section className="standard-features blueBack">
        <div className="container">
          <h3 className="upper text-center lato">
            Standard Features for all plans
            <div style={{ fontSize: "10px" }}>*(service fee may be required)
              <div className="blink_me"> $
                {stateid == 1 ? "65" : null || stateid == 2 ? "60" : null || stateid == 3 ? "75" : null || stateid == 4 ? "75" : null || stateid == 5 ? "75" : null}
              </div>
            </div>
          </h3>
          <div className="standard-flexy">
            {stanfeature.map(features => 
                <div key={features.standard_titles} className="feature_group">
                  <p className="feature_header">{features.standard_titles}</p>
                  {features.productinfo.map(featurelist => (
                    <div key={featurelist.standard_features}>
                    <p>{featurelist.standard_features}</p>
                    </div>
                  ))}
                </div> 
            )}
          </div>
        </div>
      </section>
    </>
  )
}
export default StandarFeature
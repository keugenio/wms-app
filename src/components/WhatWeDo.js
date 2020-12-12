import React from "react";
import WMSCard from '../components/WMSCard';
import wms1 from '../images/wms1.png';
import das8 from '../images/das-project/das_project_8.png';
import das10 from '../images/das-project/das_project_10.png';
import salesforce from '../images/salesforce.png';
import Trail from '../components/Trail';

export default function WhatWeDo(props) { 

  return (
    <div>
      <WMSCard title="What We Do" body={<Body />} />
    </div>
  )
}
function Body() {
  return (
    <div>
      <blockquote className="blockquote">
        Everyone expects their wireless devices to perform at high levels at all times, which is why we build high-performance DAS systems. Whether at work or at play, staying connected to friends and family is a part of life. At WMS, our efficient project management and innovative designs ensure critical dates are met with high-performance service. We have successfully completed the equivalent of more than $20 billion in DAS projects.
      </blockquote>
      <div className="row d-flex justify-content-center ">
        <Trail open={true}>
          <img className="company_icon" src={wms1} alt="wms1"/>
          <img className="company_icon" src={das8} alt="das8"/>
          <img className="company_icon" src={das10} alt="das10"/>
          <img className="company_icon" src={salesforce} alt="salesforce"/>
        </Trail>
      </div>
    </div>    
  )
}
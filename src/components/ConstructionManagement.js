import React from "react";
import WMSCard from '../components/WMSCard';

export default function ConstructionManagement(props) { 
  const body=`
    <blockquote class="blockquote">
      Everyone expects their wireless devices to perform at high levels at all times, which is why we build high-performance DAS systems. Whether at work or at play, staying connected to friends and family is a part of life. At WMS, our efficient project management and innovative designs ensure critical dates are met with high-performance service. We have successfully completed the equivalent of more than $20 billion in DAS projects.
    </blockquote>
    <div class="row d-flex justify-content-center ">
      <img class="company_icon" src="./img/wms1.png"/>
      <img class="company_icon" src="./img/das-project/das_project_8.png"/>
      <img class="company_icon" src="./img/das-project/das_project_10.png"/>
      <img class="company_icon" src="./img/salesforce.png"/>
    </div>
  `

  return (
    <div>
      <WMSCard title="Construction Management" body={body} />
    </div>
  )
}
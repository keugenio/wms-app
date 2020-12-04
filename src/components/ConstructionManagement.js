import React from "react";
import WMSCard from '../components/WMSCard';
import Trail from '../components/Trail';

import project_8 from '../images/das-project/das_project_8.png';
import project_10 from '../images/das-project/das_project_10.png';
import wms1 from '../images/wms1.png';
import salesforce from '../images/salesforce.png';

export default function ConstructionManagement(props) { 

  return (
    <div>
      <WMSCard title="Construction Management" body={<Body open={true} />} />
    </div>
  )
}

function Body(props) {
  const {open} = props;
  
  return (

      <div className="row">

        <div>
            <div className="text-white">
                <div style={{padding: "5%"}}>                 
                  <p className="text-white text-justify text-shadow-black">Winning is the goal for any business, and that requires respectable leadership and a solid strategy. At WMS, we have over 30 years of experience in telecommunications design, project management, construction, and installation. That is what makes us qualified to provide services like contract review, budget management, RF engineering management, engineering guidance, construction practices, and installation standard</p>
                </div>               
            </div>                
        </div>
        <Trail open={open} >
          <img src={wms1} className="rounded mx-auto d-block busLogo" alt="wms1" />
          <img src={project_8} className="rounded mx-auto d-block busLogo" alt="project_8"  />
          <img src={project_10} className="rounded mx-auto d-block busLogo" alt="project_10"  />
          <img src={salesforce} className="rounded mx-auto d-block busLogo" alt="salesforce"  />        
        </Trail>  

      </div>
    
  )
}
import React, { useState } from "react";
import WMSCard from '../components/WMSCard';
import Trail from '../components/Trail';

import project_5 from '../images/das-project/das_project_5.png';
import project_13 from '../images/das-project/das_project_13.png';
import project_7 from '../images/das-project/das_project_7.png';
import project_3 from '../images/das-project/das_project_3.jpg';
import project_2 from '../images/das-project/das_project_2.jpg';


export default function ProjectDesignAndEngineering(props) { 
  const [open] = useState(true);
  return (
    <div>
      <WMSCard title="Project Design and Engineering" body={<Body open={open} />} />
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
                  <p className="text-white text-justify text-shadow-black">Every project has unique requirements and challenges, and for that reason WMS utilizes various design techniques and equipment vendors to meet the needs of today’s and tomorrow’s technologies. Our unique method of system design is the product of our extensive DAS experience, from stadiums to commercial real estate.</p>
                </div>               
            </div>                
        </div>
        <Trail open={open} >
          <img src={project_5} className="rounded mx-auto d-block busLogo" alt="project_5" />
          <img src={project_13} className="rounded mx-auto d-block busLogo" alt="project_13"  />
          <img src={project_7} className="rounded mx-auto d-block busLogo" alt="project_7"  />
          <img src={project_3} className="rounded mx-auto d-block busLogo" alt="project_3"  />
          <img src={project_2} className="rounded mx-auto d-block busLogo" alt="project_2"  />
        </Trail>  

      </div>
    
  )
}
import React from "react";
import WMSCard from '../components/WMSCard';
import Trail from '../components/Trail';

import project_4 from '../images/das-project/das_project_4.jpg';
import project_11 from '../images/das-project/das_project_11.png';
import project_14 from '../images/das-project/das_project_14.png';
import project_15 from '../images/das-project/das_project_15.jpg';
import project_16 from '../images/das-project/das_project_16.png';
import project_17 from '../images/das-project/das_project_17.png';


export default function ProgramAndProjectManagement(props) { 

  return (
    <div>
      <WMSCard title="Project And Project Management" body={<Body open={true}/>} />
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
          <img src={project_4} className="rounded mx-auto d-block busLogo" alt="project_4" />
          <img src={project_11} className="rounded mx-auto d-block busLogo" alt="project_11"  />
          <img src={project_14} className="rounded mx-auto d-block busLogo" alt="project_14"  />
          <img src={project_15} className="rounded mx-auto d-block busLogo" alt="project_15"  />
          <img src={project_16} className="rounded mx-auto d-block busLogo" alt="project_16"  />
          <img src={project_17} className="rounded mx-auto d-block busLogo" alt="project_17"  />          
        </Trail>  

      </div>
    
  )
}
import React from "react";
import WMSCard from '../components/WMSCard';
import Trail from '../components/Trail';

import das13 from '../images/das-head/das_head_end_13.jpg';
import das1 from '../images/das-head/das_head_end_1.png';
import das4 from '../images/das-head/das_head_end_4.png';
import das3 from '../images/das-head/das_head_end_3.png';
import das8 from '../images/das-head/das_head_end_8.jpg';
import das9 from '../images/das-head/das_head_end_9.jpg';
import das6 from '../images/das-head/das_head_end_6.png';
import das7 from '../images/das-head/das_head_end_7.jpg';
import das10 from '../images/das-head/das_head_end_10.jpg';
import das11 from '../images/das-head/das_head_end_11.jpg';
import das12 from '../images/das-head/das_head_end_12.jpg';

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
            <div>
                <div style={{padding: "5%"}}>                 
                  <p className="text-white text-left text-shadow-black">Construction and equipment installation have many rules, from building codes to installation practices. The knowledge we have at WMS allows us to adhere to the regulations that help build a safe and high-performing network. We also know that pride in workmanship can leave a lasting impression.</p>
                  <blockquote className="blockquote text-center" style={{fontSize:"1.5 rem", fontStyle:"italic", marginBottom:"3rem"}}>"IT SHOULD LOOK BETTER THAN IT WORKS"</blockquote>
                </div>               
            </div>                
        </div>
        <Trail open={open} >
            <div className="col"  style={{display:"grid", gridGap:"5px", flex:1}}>
              <img src={das13} className="rounded mx-auto d-block busLogo" alt="google" />
              <img src={das6} className="rounded mx-auto d-block busLogo" alt="sap"  />            
              <img src={das10} className="rounded mx-auto d-block busLogo" alt="golden 1" />  
            </div>
            <div className="col" style={{display:"grid", gridGap:"5px", flex:1}}>
              <img src={das11} className="rounded mx-auto d-block busLogo" alt="toyota"  />             
              <img src={das9} className="rounded mx-auto d-block busLogo" alt="oracle"  />                                 
              <img src={das1} className="rounded mx-auto d-block busLogo" alt="levis"  />
            </div>
            <div className="col" style={{display:"grid", gridGap:"5px", flex:1}}>
              <img src={das4} className="rounded mx-auto d-block busLogo" alt="moscone"  />
              <img src={das3} className="rounded mx-auto d-block busLogo" alt="o co"  /> 
            </div>
            <div className="col" style={{display:"grid", gridGap:"5px", flex:"1"}}>
              <img src={das7} className="rounded mx-auto d-block busLogo" alt="cal berkeley"  /> 
              <img src={das12} className="rounded mx-auto d-block busLogo" alt="pg&e"  />                 
            </div>
          <img src={das8} className="rounded mx-auto d-block busLogo" alt="stanford" style={{gridRow:"auto / span 2"}}/>
        </Trail>  

      </div>
    
  )
}
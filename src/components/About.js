import React from "react";
import WMSCard from '../components/WMSCard';

export default function About(props) {

  return (
    <div>
      <WMSCard title="About WMS" body={<Body />} />
    </div>
    )
}

function Body() {
  return (
    <div className="row">
    <div className="col-lg-4 my-auto" align="center">
      <div className="row" style={{borderRight:"solid thin #fff"}}>
        <div className="col-xs-12 col-lg-10 col-md-12 my-auto" align="center">
          <div>
              <img className="img-fluid rounded-circle" src="./img/profile.jpeg" alt="Jay"/>
              <p className="display-4">Jay Inouye</p> 
              <p className="display-5">President</p>
          </div>
          <div>

          
            <div className="row d-flex justify-content-center">
              <div>
                  <a href="tel:(925)785-3144">
                    <i className="fa fa-phone"></i>
                  </a>               
              </div>
              <div>
                <a className="display-5" href="jinouye@wirems.net">
                  <i className="fa fa-envelope"></i>
                </a>                 
              </div>
              <div>
                <a className="display-5" href="https://www.linkedin.com/in/jay-inouye-5ab1a422/">
                  <i className="fab fa-linkedin"></i>
                </a>                 
              </div>
            </div>
          
          </div>
        </div>
            
      </div>      
    </div>
    <div className="col-lg-8 my-auto" align="left">
      <div className="about-blockquote">
        With 30 plus years in telecommunications, Jay started WMS because of his fascination with complex DAS designs. He combines his expertise and skill in management, engineering, construction, and installation to customize his projects.<br /><br />
        Having worked with the major U.S. wireless carriers as an employee, consultant and contractor, Jay understands all aspects of the implementation process. His career highlights include involvement with Super Bowl wireless coverage, startup wireless carriers, and network conversion technologies.
        <hr />
        <div className="mt-3">*SBA Member</div>
        <div>*Certified Minority Owned Company</div>
      </div>           
    </div>          
  </div>     
  )
}
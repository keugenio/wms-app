import React from "react";
import WMSCard from '../components/WMSCard';

export default function About(props) {
  const body = `
  <div class="row">
    <div class="col-lg-4 my-auto" align="center">
      <div class="row" style="border-right:solid thin #fff">
        <div class="col-xs-12 col-lg-10 col-md-12 my-auto" align="center">
          <div>
              <img class="img-fluid rounded-circle" src="./img/profile.jpeg" alt="Jay" style="box-shadow: 3px 3px 3px indigo;
              border: thin solid indigo;"/>
              <p class="display-4">Jay Inouye</p> 
              <p class="display-5">President</p>
          </div>
          <div>

          
            <div class="row d-flex justify-content-center">
              <div>
                  <a href="tel:(925)785-3144">
                    <i class="fa fa-phone"></i>
                  </a>               
              </div>
              <div>
                <a class="display-5" href="mailto:jayinouye@wirelessmanagementservices.com">
                  <i class="fa fa-envelope"></i>
                </a>                 
              </div>
              <div>
                <a class="display-5" href="https://www.linkedin.com/in/jay-inouye-5ab1a422/">
                  <i class="fab fa-linkedin"></i>
                </a>                 
              </div>
            </div>
          
          </div>
        </div>
            
      </div>      
    </div>
    <div class="col-lg-8 my-auto" align="left">
      <div class="about-blockquote">
        With 30 plus years in telecommunications, Jay started WMS because of his fascination with complex DAS designs. He combines his expertise and skill in management, engineering, construction, and installation to customize his projects.<br /><br />
        Having worked with the major U.S. wireless carriers as an employee, consultant and contractor, Jay understands all aspects of the implementation process. His career highlights include involvement with Super Bowl wireless coverage, startup wireless carriers, and network conversion technologies.
        <hr />
        <div class="mt-3">*SBA Member</div>
        <div>*Certified Minority Owned Company</div>
      </div>           
    </div>          
  </div>    
  `
  return (
    <div>
      <WMSCard title="About WMS" body={body} />
    </div>
    )
}

  
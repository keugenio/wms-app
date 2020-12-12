import React from "react";

export default function TopMenu(props) {

  if (props.show)
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent" style={navStyle} id="topMenu">
        <div class="collapse navbar-collapse mr-4" id="navbarNav">
          <ul class="navbar-nav" style={{color:"white"}}>
            <li class="nav-item">
              <a class="nav-link" href="mailto:jinouye@wirems.net" ><i className="fas fa-envelope-open-text"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tel:(925)785-3144" ><i class="fas fa-phone-square"></i></a>
            </li>
          </ul>
        </div>
        <a class="navbar-brand" href >Wireless Management Systems</a>        
      </nav>
    ) 
  else
    return null;
}

const navStyle = {
  padding: "10px",
  fontFamily: "Arial",
  position:"absolute",
  right:0,

  zIndex:1000
};
import React from "react";

export default function TopMenu(props) {

  if (props.show)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={navStyle} id="topMenu">
        <div className="collapse navbar-collapse mr-4" id="navbarNav">
          <ul className="navbar-nav" style={{color:"white"}}>
            <li className="nav-item">
              <a className="nav-link" href="mailto:jinouye@wirems.net" ><i className="fas fa-envelope-open-text"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel:(925)785-3144" ><i className="fas fa-phone-square"></i></a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href >Wireless Management Systems</a>        
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
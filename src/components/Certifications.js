import React from "react";
import { useTrail, a } from 'react-spring';

export default function Certifications(props) { 

  return (
    <div style={styles.rowStyles}>
      <div className="card  bg-indigo-light" style={{width: "90%"}}>
        <div className="card-title text-left display-4 pl-4">Certifications</div>
        <div className="card-body bg-indigo-light">
          <Body />
        </div>
      </div>
    </div>
  )
}

function Body(){
  return (
    <div className ="row">    
        <ul>
          <Trail open={true}>
            <li style={styles.liStyles}>iBwave - Certification Program</li>
            <li style={styles.liStyles}>BICSI - Certified In Building Engineering Technologist</li>
            <li style={styles.liStyles}>BICSI - Quality Assurance and Contractual Compliance</li>                    
            <li style={styles.liStyles}>Vendor Certifications (DAS OEM, DC Power, Fiber, PIM, RF)</li>
            <li style={styles.liStyles}>Telcordia - Installation Quality for Telecom Facilities</li>   
          </Trail>                              
        </ul>       
  </div>       
  )
}

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

const styles={
  rowStyles:{
    position: "absolute",
    width: "90%",
    left: "10%",
    top:"25%",
    color: "rgb(255, 165, 0)"
  },
  liStyles:{
    color:"orange",
    fontSize:"1.5rem",
    textAlign:"left"
  }

}
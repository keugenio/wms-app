import React from "react";
import { useTrail, a } from 'react-spring';
import WMSCard from './WMSCard';

export default function Certifications(props) { 

  return (    
    <div>
      <WMSCard title="Certifications" body={<Body open={true} />} />
    </div>


  )
}

function Body(){
  return (
    <div style={styles.rowStyles} >    
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
    width:'75vw'
  },
  liStyles:{
    color:"orange",
    fontSize:"1.5rem",
    textAlign:"left",
    textShadow:"1px 2px #196633"
  }

}
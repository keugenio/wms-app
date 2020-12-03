import React, { useState } from "react";
import WMSCard from '../components/WMSCard';
//import SimpleImageSlider from "react-simple-image-slider";
import {useTrail, a } from 'react-spring';
import project_5 from '../images/das-project/das_project_5.png';
import project_13 from '../images/das-project/das_project_13.png';
import project_7 from '../images/das-project/das_project_7.png';
import project_3 from '../images/das-project/das_project_3.jpg';
import project_2 from '../images/das-project/das_project_2.jpg';


export default function ProjectDesignAndEngineering(props) { 
  const [open, set] = useState(true);
  return (
    <div>
      <WMSCard title="Project Design and Engineering" body={<Body open={open} set={set}/>} />
    </div>
  )
}

function Body(props) {
  const {open, set} = props;
  
  return (

      <div className="row">

        <div>
            <div className="text-white d-flex align-items-center h-100">
                <div style={{padding: "5%"}}>                 
                  <p className="text-white text-justify text-shadow-black">Every project has unique requirements and challenges, and for that reason WMS utilizes various design techniques and equipment vendors to meet the needs of today’s and tomorrow’s technologies. Our unique method of system design is the product of our extensive DAS experience, from stadiums to commercial real estate.</p>
                </div>               
            </div>                
        </div>
        <Trail open={open}>
          <img src={project_5} className="rounded mx-auto d-block" alt="project_5" style={styles.imageStyle}/>
          <img src={project_13} className="rounded mx-auto d-block" alt="project_13" style={styles.imageStyle} />
          <img src={project_7} className="rounded mx-auto d-block" alt="project_7" style={styles.imageStyle} />
          <img src={project_3} className="rounded mx-auto d-block" alt="project_3" style={styles.imageStyle} />
          <img src={project_2} className="rounded mx-auto d-block" alt="project_2" style={styles.imageStyle} />
        </Trail>  

      </div>
    
  )
}

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="trails-main" {...props} style={styles.imageContainerStyle}>
        {trail.map(({ x, height, ...rest }, index) => (
          <span
            key={items[index]}
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <span style={{ height }}>{items[index]}</span>
          </span>
        ))}
    </div>
  )
}

const styles = {
  imageStyle:{
    width:"200px",
    height:"auto",
    backgroundColor:"white",
    padding:"5px",
    boxShadow:"3px 3px 3px indigo"
  },
  imageContainerStyle:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width:"100%",
    alignItems:"center"
  }
}
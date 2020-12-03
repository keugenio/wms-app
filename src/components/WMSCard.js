import React from "react";
import {useSpring, animated} from 'react-spring';

export default function WMSCard(props) { 
  const{title, body} = props;
  const fade = useSpring({
    from: {
      opacity:.0,
      color:'white',
      transform: 'translateX(40%)'
    },
    to: {
      opacity:1,
      color:'orange',
      transform: 'translateX(8%)'
    }
  });

  return (
    <div>
      <animated.div style={fade}>
        <div className="card  bg-indigo-light" style={{width: "90%"}}>
          <div className="card-title text-left display-4 pl-4">{title}</div>
          <div className="card-body bg-indigo-light">
            <div style={styles.aboutStyle} >
              {body}
            </div>             
          </div>
        </div> 
      </animated.div>
    </div>
  )
}
const 
styles = {
  aboutStyle:{
  margin: '5%',
  fontSize: '1.25em',
  paddingLeft: '25px',
  textAlign: 'left',
  textShadow:'2px 2px 3px black'
}}
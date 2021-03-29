import React from "react";
import {useSpring, animated} from 'react-spring';
import logo from '../images/WMS_logo.png';

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
      transform: 'translateX(15%)'
    }
  });

  return (
    <div>
      <animated.div style={fade}>
        <div className="card  bg-gray-translucent" style={{width: "75%"}}>
          <div className="card-title text-left pl-4 d-flex"><span>{title}</span><span  className="ml-auto mr-2 d-flex align-items-center"><img src={logo} alt="wms logo" style={styles.imgStyle}/></span></div>
          <div className="card-body">
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
    margin: '1%',
    fontSize: '1.25em',
    paddingLeft: '25px',
    textAlign: 'left',
    textShadow:'2px 2px 3px black'},
  imgStyle:{
    height:'3.25rem',
    width:'auto'
  }
}
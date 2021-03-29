import React from "react";
import { useSpring, animated, config }from 'react-spring';
import heroImage from '../images/WMS_hero.png';

export default function HeroText(props) {
  const { show } = props;
  console.log("show hero:", show);
  const fadeStyles = useSpring({
    config:{ ...config.gentle},
    from: { opacity:0, alignSelf:'stretch', marginLeft:'5rem', marginRight:'5rem'},
    to: { opacity: show ? 1:0, display:show ? 'block':'none'},
  })


  return (
      <animated.div style={fadeStyles}>
        <div className="row">
          <div className="col-md-12 hero-title">
          <img src={heroImage} alt="wms logo" ></img>
          </div>
        </div>

      </animated.div>

    )
}
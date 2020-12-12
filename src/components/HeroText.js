import React from "react";
import { useSpring, animated, config }from 'react-spring';

export default function HeroText(props) {
  const { show } = props;
  console.log("show hero:", show);
  const fadeStyles = useSpring({
    config:{ ...config.gentle},
    from: { opacity:0, position:"absolute", width:"100%", left:0 },
    to: { opacity: show ? 1:0},

  })


  return (
      <animated.div style={fadeStyles}>
        <h1 className="hero-title">
          Wireless Management Services
          <em>Building High-Performance DAS Systems</em>
        </h1>
      </animated.div>

    )
}
  
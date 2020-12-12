import React from 'react';
import {useTrail, a } from 'react-spring';

export default function Trail({ open, children, ...props }) {
  const {marginTop} = props;
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 200 : 0,
    from: { opacity: 0, x: 100, height: 0 },
  })


  return (
    <div className="trails-main" {...props} style={styles.imageContainerStyle}>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text d-flex align-items-center"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`), marginTop:marginTop }}>
            <a.div style={{ height,display:"flex", alignItems:"center" }}>{items[index]}</a.div>
          </a.div>
        ))}
    </div>
  )

}
const styles = { 
  imageContainerStyle:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width:"100%",
    alignItems:"center"
  } 
}  

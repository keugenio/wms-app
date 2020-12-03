import React from "react";

export default function MenuItemButton(props) { 
  
  const { buttonName , handleOnClick} = props
  return (
    <a href onClick = {()=>handleOnClick(buttonName)}>{buttonName}</a>
  )
}
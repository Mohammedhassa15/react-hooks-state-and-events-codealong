import React, {useState} from "react";

function Toggle() {
  const [isOn,setIsOn] =useState(true);
  function handleClick() {
    setIsOn((isOn) => !isOn)
  }
  const color = isOn ? "limegreen": "white";

  return <button  style={{ background: color }}onClick={handleClick}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;

import React,{useState} from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return (
    <div>
       <p>{isOn ? 'On' : 'Off'}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}
export default Toggle
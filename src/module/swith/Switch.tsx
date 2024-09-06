import { useState } from 'react';
import './Switch.css';

const Switch = () => {
  const [switch1_IsOn, setSwitch1_IsOn] = useState(false);
  const [switch2_IsOn, setSwitch2_IsOn] = useState(false);

  return <>
    <div className={`switch-container`}>
        <div className={`bg-switch ${switch1_IsOn ? "on-switch1" : "off-switch1"}`}>
            <div className={`myswitch ${switch1_IsOn ? "on-switch1" : ""}`} onClick={() => setSwitch1_IsOn(prev => !prev)}></div>
        </div>
        <div className="box-status">
                <div className={`status ${switch1_IsOn ? "on-switch1" : "off-switch2"}`}></div>
            </div>
    </div>
    <div className={`switch-container`}>
        <div className={`bg-switch ${switch2_IsOn ? "on-switch2" : "off-switch2"}`}>
            <div className={`myswitch ${switch2_IsOn ? "on-switch2" : ""}`} onClick={() => setSwitch2_IsOn(prev => !prev)}></div>
        </div>
        <div className="box-status">
                <div className={`status ${switch2_IsOn ? "on-switch2" : "off-switch2"}`}></div>
        </div>
    </div>
  </>
};

export default Switch;
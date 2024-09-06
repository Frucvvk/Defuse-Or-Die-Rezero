import { useState } from 'react'
import './CircuitPanel.css'

const CircuitPanel = () => {
    const [transister_brown, setTransister_brown] = useState(false);
    const [transister_blue, setTransister_blue] = useState(false);
    const [transister_black, setTransister_black] = useState(false);
    const [resister1, setResister1] = useState(false);
    const [resister2, setResister2] = useState(false);
    const [com1, setCom1] = useState(false);
    const [com2, setCom2] = useState(false);
    const [com3, setCom3] = useState(false);
    const [chipbig, setChipbig] = useState(false);
    const [chipSmall, setChipSmall] = useState(false);
    const [chipMain, setChipMain] = useState(false);

    return <>
        <div className={`com transister_brown ${ transister_brown ? "fall-animation" : ""}`} onClick={() => setTransister_brown(true)}></div>
        <div className={`com transister_black ${ transister_black ? "fall-animation" : ""}`} onClick={() => setTransister_black(true)}></div>
        <div className={`com transister_blue ${ transister_blue ? "fall-animation" : ""}`} onClick={() => setTransister_blue(true)}></div>
        
        <div className={`com resister1 ${ resister1 ? "fall-animation" : ""}`} onClick={() => setResister1(true)}></div>
        <div className={`com resister2 ${ resister2 ? "fall-animation" : ""}`} onClick={() => setResister2(true)}></div>
        
        <div className={`com_capaciter com1 ${ com1 ? "fall-animation" : ""}`} onClick={() => setCom1(true)}></div>
        <div className={`com_capaciter com2 ${ com2 ? "fall-animation" : ""}`} onClick={() => setCom2(true)}></div>
        <div className={`com_capaciter com3 ${ com3 ? "fall-animation" : ""}`} onClick={() => setCom3(true)}></div>

        <div className={`chip-box `}>
            <div className={`line hor line1 ${ chipbig ? "fall-animation" : ""}`}></div>
            <div className={`line hor line2 ${ chipbig ? "fall-animation" : ""}`}></div>
            <div className={`line hor line3 ${ chipbig ? "fall-animation" : ""}`}></div>
            <div className={`line hor line4 ${ chipbig ? "fall-animation" : ""}`}></div>
            <div className={`line hor line5 ${ chipbig ? "fall-animation" : ""}`}></div>
            <div className={`chip chip-big ${ chipbig ? "fall-animation" : ""}`} onClick={() => setChipbig(true)}></div>
        </div>

        <div className={`chip-box `}>
            <div className={`line ver line6 ${ chipSmall ? "fall-animation" : ""}`}></div>
            <div className={`line ver line7 ${ chipSmall ? "fall-animation" : ""}`}></div>
            <div className={`line ver line8 ${ chipSmall ? "fall-animation" : ""}`}></div>
            <div className={`line ver line9 ${ chipSmall ? "fall-animation" : ""}`}></div>
            <div className={`line ver line10 ${ chipSmall ? "fall-animation" : ""}`}></div>
            <div className={`line ver line11 ${ chipSmall ? "fall-animation" : ""}`}></div>
            <div className={`chip chip-small ${ chipSmall ? "fall-animation" : ""}`} onClick={() => setChipSmall(true)}></div>
        </div>

        <div className={`chip-box `}>
           <div className={`line chip1 line12 ${ chipMain ? "fall-animation" : ""}`}></div>
           <div className={`line chip1 line13 ${ chipMain ? "fall-animation" : ""}`}></div>
           <div className={`line chip2 line14 ${ chipMain ? "fall-animation" : ""}`}></div>
           <div className={`line chip2 line15 ${ chipMain ? "fall-animation" : ""}`}></div>
           
           <div className={`chip chip-main ${ chipMain ? "fall-animation" : ""}`} onClick={() => setChipMain(true)}></div> 
        </div>
    </>
}

export default CircuitPanel;
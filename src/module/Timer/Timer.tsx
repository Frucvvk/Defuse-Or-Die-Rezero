import { useState } from "react"
import "./Timer.css"

const Timer = () => {
    const [miss1,setMiss1] = useState(true)
    const [miss2,setMiss2] = useState(false)
    const [miss3,setMiss3] = useState(false)

    const [code_num1,setCode_num1] = useState(true)
    const [code_num2,setCode_num2] = useState(true)
    const [code_num3,setCode_num3] = useState(false)
    const [code_num4,setCode_num4] = useState(false)

    const min = "01"
    const sec = "12"
    const milli_sec = "97"

    return <>
        <div className={`status-miss-code-num miss1 ${miss1 ? "" : "active-miss"}`} ></div>
        <div className={`status-miss-code-num miss2 ${miss2 ? "" : "active-miss"}`} ></div>
        <div className={`status-miss-code-num miss3 ${miss3 ? "" : "active-miss"}`} ></div>
        
        <div className={`status-miss-code-num code-num1 ${code_num1 ? "" : "active-code"}`} ></div>
        <div className={`status-miss-code-num code-num2 ${code_num2 ? "" : "active-code"}`} ></div>
        <div className={`status-miss-code-num code-num3 ${code_num3 ? "" : "active-code"}`} ></div>
        <div className={`status-miss-code-num code-num4 ${code_num4 ? "" : "active-code"}`} ></div>
        
        <div className="myTimer">
            <div className="box-time min on">{min}</div>
            <div className="box-time min under">88</div>
            <div className="box-time sec on">{sec}</div>
            <div className="box-time sec under">88</div>
            <div className="box-time milli-sec on">{milli_sec}</div>
            <div className="box-time milli-sec under">88</div>
            <div className="colon colon1">:</div>
            <div className="colon colon2">:</div>
        </div>
    </>
}

export default Timer
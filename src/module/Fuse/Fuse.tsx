import { useState } from 'react'
import './Fuse.css'

const Fuse = () => {
    const [isFuse1 ,setIsFuse1] = useState(false)
    const [isFuse2 ,setIsFuse2] = useState(false)
    const [isFuse3 ,setIsFuse3] = useState(false)
    const [isFuse4 ,setIsFuse4] = useState(false)
    return <>
        <div className="fuse-box">
            <div className={`wavy fuse1 ${isFuse1 ? "fall-animation" : ""}`} onClick={() => setIsFuse1(true)}></div>
            <div className={`myfuse fuse1 ${isFuse1 ? "fall-animation" : ""}`} onClick={() => setIsFuse1(true)}></div>
            <div className={`fuse-h fuse1 ${isFuse1 ? "fall-animation" : ""}`} onClick={() => setIsFuse1(true)}></div>
            <div className={`fuse-t fuse1 ${isFuse1 ? "fall-animation" : ""}`} onClick={() => setIsFuse1(true)}></div>
        </div>
        <div className="fuse-box">
            <div className={`wavy fuse2 ${isFuse2 ? "fall-animation" : ""}`} onClick={() => setIsFuse2(true)}></div>
            <div className={`myfuse fuse2 ${isFuse2 ? "fall-animation" : ""}`} onClick={() => setIsFuse2(true)}></div>
            <div className={`fuse-h fuse2 ${isFuse2 ? "fall-animation" : ""}`} onClick={() => setIsFuse2(true)}></div>
            <div className={`fuse-t fuse2 ${isFuse2 ? "fall-animation" : ""}`} onClick={() => setIsFuse2(true)}></div>
        </div>
        <div className="fuse-box">
            <div className={`wavy fuse3 ${isFuse3 ? "fall-animation" : ""}`} onClick={() => setIsFuse3(true)}></div>
            <div className={`myfuse fuse3 ${isFuse3 ? "fall-animation" : ""}`} onClick={() => setIsFuse3(true)}></div>
            <div className={`fuse-h fuse3 ${isFuse3 ? "fall-animation" : ""}`} onClick={() => setIsFuse3(true)}></div>
            <div className={`fuse-t fuse3 ${isFuse3 ? "fall-animation" : ""}`} onClick={() => setIsFuse3(true)}></div>
        </div>
        <div className="fuse-box">
            <div className={`wavy fuse4 ${isFuse4 ? "fall-animation" : ""}`} onClick={() => setIsFuse4(true)}></div>
            <div className={`myfuse fuse4 ${isFuse4 ? "fall-animation" : ""}`} onClick={() => setIsFuse4(true)}></div>
            <div className={`fuse-h fuse4 ${isFuse4 ? "fall-animation" : ""}`} onClick={() => setIsFuse4(true)}></div>
            <div className={`fuse-t fuse4 ${isFuse4 ? "fall-animation" : ""}`} onClick={() => setIsFuse4(true)}></div>
        </div>
    </>
}

export default Fuse
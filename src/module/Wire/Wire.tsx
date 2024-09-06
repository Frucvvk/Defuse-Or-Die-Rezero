import { useState } from 'react'
import './Wire.css'

const Wire = () => {
    const [isCut1,setIscut1] = useState(false)
    const [isCut2,setIscut2] = useState(false)
    const [isCut3,setIscut3] = useState(false)
    const [isCut4,setIscut4] = useState(false)
    const [isCut5,setIscut5] = useState(false)

    return <>
        <div className="wire-container">
            <div className="mybox mybox-top"></div>
            { !isCut1 ? <div className="mywire red" onClick={() => setIscut1(true)}></div> : 
            <>
                <div className="mywire-cut red top"></div>
                <div className="mywire-cut red bot"></div>
            </>
            }

            { !isCut2 ? <div className="mywire green" onClick={() => setIscut2(true)}></div> : 
            <>
                <div className="mywire-cut green top"></div>
                <div className="mywire-cut green bot"></div>
            </>
            }

            { !isCut3 ? <div className="mywire yellow" onClick={() => setIscut3(true)}></div> : 
            <>
                <div className="mywire-cut yellow top"></div>
                <div className="mywire-cut yellow bot"></div>
            </>
            }

            { !isCut4 ? <div className="mywire pink" onClick={() => setIscut4(true)}></div> : 
            <>
                <div className="mywire-cut pink top"></div>
                <div className="mywire-cut pink bot"></div>
            </>
            }

            { !isCut5 ? <div className="mywire blue" onClick={() => setIscut5(true)}></div> : 
            <>
                <div className="mywire-cut blue top"></div>
                <div className="mywire-cut blue bot"></div>
            </>
            }
            <div className="mybox mybox-bot"></div>
        </div>
    </>
}

export default Wire
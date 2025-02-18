
import Battery from '../module/Battery/Battery'
import CircuitPanel from '../module/circuitPanel/CircuitPanel'
import NumPad from '../module/NumPad/Numpad'
import Wire from '../module/Wire/Wire'
import './GameScreen.css'
type Probs = {
  onEnd: (outcome: 'win' | 'lose') => void
}
function GameScreen({ onEnd }: Probs) {
  return (
    <>
      <div className="big-container">
        <div className="rectangle"> </div>
        <div className="rectangle"> </div>
        <div className="box rectangle_wire"> </div>


        <div className="container">
            <div className="left">
                <div className="switch"></div>
                <div className="fuse"></div>
            </div>

            <div className="invi-rectangle"></div>
        
            <div className="center">
                <div className="time-container">
                    <div className="box time"></div>
                    <div className="box code"></div>
                    <div className="box buttonstatus"></div>
                </div>
                <div className="box button"></div>
                <p></p>
                <div className="middle">
                    <div className="circuitmain">
                        <div className="box circuit"><CircuitPanel /></div>
                        <div className="box serialnumber"></div>
                    </div>
                    <div className="box numpad"><NumPad /></div>
                </div>
            </div>
                
            <div className="invi-rectangle"></div>
            
            <div className="right">
                <div className="wire"><Wire /></div>
                <div className="battery"><Battery /></div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default GameScreen

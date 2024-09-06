
import Battery from '../module/Battery/Battery'
import Button from '../module/button/Button'
import CircuitPanel from '../module/circuitPanel/CircuitPanel'
import Fuse from '../module/Fuse/Fuse'
import NumPad from '../module/NumPad/Numpad'
import Switch from '../module/swith/Switch'
import Timer from '../module/Timer/Timer'
import Wire from '../module/Wire/Wire'
import './GameScreen.css'
import Menu from '../module/Menu/menu'
import Manual from '../module/Manual/Manual'

type Probs = {
  onEnd: (outcome: 'win' | 'lose') => void
}
function GameScreen({ onEnd }: Probs) {
  return (
    <>
      <div className="very-large-container">
      <Menu/>
      <Manual/>
      <div className="big-container">
        <div className="rectangle"> </div>
        <div className="rectangle"> </div>

        <div className="container">
            <div className="left">
                <div className="switch"><Switch /></div>
                <div className="fuse"><Fuse /></div>
            </div>

            <div className="invi-rectangle"></div>
        
            <div className="center">
                <div className="time-container">
                    <div className="box time"><Timer /></div>
                    <div className="box code"></div>
                    <div className="box buttonstatus"></div>
                </div>
                <div className="box button"><Button /></div>
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
    </div>
    </>
  )
}

export default GameScreen

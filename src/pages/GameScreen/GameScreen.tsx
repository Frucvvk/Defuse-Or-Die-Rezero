import Battery from '../../module/Battery/Battery'
import CircuitPanel from '../../module/circuitPanel/CircuitPanel'
import Wire from '../../module/Wire/Wire'
import NumPad from '../../module/NumPad/Numpad'
import './GameScreen.css'
import Menu from '../../module/Menu/menu'
import { useState } from 'react'
import Manual from '../../module/Manual/Manual'
type Probs = {
  onEnd: (outcome: 'win' | 'lose') => void
}
function GameScreen({ onEnd }: Probs) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const manualPages = [
    `Welcome to the Bomb Game Manual! This game tests your skills in defusing bombs. \nBe careful, each decision counts asdfasdfasdfas`,
    "Page 2: Instructions on defusing the bomb. You will see wires, buttons, and timers. Follow the correct sequence to defuse it.",
    "Page 3: Time is critical. You must make decisions fast but carefully. One wrong cut could end the game!",
    "Page 4: If you're unsure of what to do, use the manual. It contains detailed instructions for each bomb type.",
    "Page 5: Good luck! Keep calm and defuse the bomb!"
  ];

   const handleManualClick = () => {
    setIsManualOpen(true);
  };

  const handleCloseManual = () => {
    setIsManualOpen(false);
  };

  const handleNextPage = () => {
    if (currentPage < manualPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  
  return (
    <>
     <div className="very-large-container">
       <Menu/>
      <Manual/>
      
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
      </div>
    </>
  )
}

export default GameScreen

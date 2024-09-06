import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './menu.css'

const Menu: React.FC = () => {
   const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleResume = () => {
    // Logic to resume the game
    setIsMenuOpen(false);
  };

  const handleRestart = () => {
    // Logic to restart the game
    console.log("Game Restarted!");

    // After restarting the game, navigate to the "/game" path
    navigate("/game");
  };

  const handleMainMenu = () => {
    // Logic to go to the main menu
    console.log("Main Menu Clicked!");
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Game content */}
      <div className={`game-content ${isMenuOpen ? 'blur-background' : ''}`}></div>
        <button className="menu-button" onClick={handleMenuClick}></button>
      {/* Modal */}
      {isMenuOpen && (
        <div className="modal-overlay">
          <div className="modal">
          <h2 style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '15px' }}>Menu</h2>
            <button 
            className="resume" onClick={handleResume}>Resume</button>
             
            <button     
            className="restart" onClick={handleRestart}>Restart</button>
            <Link to="/HomeScreen">
            <button className="menu" onClick={handleMainMenu}>Main Menu</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;

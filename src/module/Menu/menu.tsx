import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
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
    setIsMenuOpen(false);
  };

  const handleMainMenu = () => {
    // Logic to go to the main menu
    console.log("Main Menu Clicked!");
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Game content */}
      <div className={`game-content ${isMenuOpen ? 'blur-background' : ''}`}>
        <div onClick={handleMenuClick} className="menu-button">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      </div>
      {/* Modal */}
      {isMenuOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Menu</h2>
            <button 
            className="resume" onClick={handleResume}>Resume</button>         
            <button     
            className="restart" onClick={handleRestart}>Restart</button>
            <Link to="/HomeScreen">
            <button 
            className="menu"  onClick={handleMainMenu}>Main Menu</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;

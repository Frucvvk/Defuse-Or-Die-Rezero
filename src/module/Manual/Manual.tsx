import React, { useState } from 'react';

const Manual: React.FC = () => {
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
      <div className={`game-content ${isManualOpen ? 'blur-background' : ''}`}></div>
      <button className="manual-button-overlay" onClick={handleManualClick}></button>
      {/* Manual (White Paper) Modal */}
      {isManualOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Manual - Page {currentPage + 1}</h2>

            {/* Left Arrow */}
            {currentPage > 0 && (
              <span className="arrow arrow-left" onClick={handlePreviousPage}>
                &#8592;
              </span>
            )}

            {/* Right Arrow */}
            {currentPage < manualPages.length - 1 && (
              <span className="arrow arrow-right" onClick={handleNextPage}>
                &#8594;
              </span>
            )}

            {/* Text area for writing */}
            <div className="manual-text">
              {manualPages[currentPage]}
            </div>
            <div className="exit-button" onClick={handleCloseManual}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Manual;

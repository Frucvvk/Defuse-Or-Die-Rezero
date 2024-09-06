import { Link } from "react-router-dom";
import './HomeScreen.css'; // Ensure to import the CSS

type Props = {
  onStart: () => void;
};

function HomeScreen({ onStart }: Props) {
  return (
    <div className="home-screen">
      <h1 className="title">Defuse Or Die</h1>
      <div className="button-container">
        <Link to="/game">
          <button className="play-button" onClick={onStart}>PLAY GAME</button>
        </Link>

        <div className="manual-buttons">
          <Link to="/manual">
            <button className="manual-button">MANUAL</button>
          </Link>
          <a href="/manual.pdf" download>
            <button className="download-button">
              <img src="/download-icon.png" alt="Download" className="download-image" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

import { Link } from "react-router-dom";
import './HomeScreen.css'; // Add this line to import the CSS file

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
        <Link to="/manual">
          <button className="manual-button">
            MANUAL <span className="download-icon">⬇</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;

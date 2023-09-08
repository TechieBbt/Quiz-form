import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { setGameState } = useContext(GameStateContext);

  return (
    <div className="fullmenu">
      <header class="header">
        <h1 id="title">SURVEY FORM</h1>
      </header>
      <div className="Menu">
        <button
          onClick={() => {
            setGameState("playing");
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Menu;

import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
// import Feedback from "./components/Thankyou";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";



// const router = createBrowserRouter([
//   {
//     path: "/thankyou",
//     element: <Feedback />,
//   },
// ]);
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;

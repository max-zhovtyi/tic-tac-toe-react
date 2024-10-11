import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  // const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare() {    
    setActivePlayer((prevActivePlayer) => {
      if (prevActivePlayer === "X") {
        return "O";
      } else {
        return "X";
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        activePlayer: {activePlayer}
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" isActive={activePlayer === 'X'} symbol="X" />
          <Player initialName="Player 2" isActive={activePlayer === 'O'} symbol="O" />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  );
}

export default App;

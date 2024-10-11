import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    console.log('App.jsx - handleSelectSquare()');
    
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
      LOG
    </main>
  );
}

export default App;

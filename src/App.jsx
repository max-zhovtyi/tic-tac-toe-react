import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      // Find out who should be the current player now. We can't use "activePlayer" as we can not rely on that value.
      // OBS! No merging two states.
      let currentPlayer = deriveActivePlayer(prevTurns);

      const turn = {
        player: currentPlayer,
        square: {
          row: rowIndex,
          col: colIndex,
        },
      };

      const updatedTurns = [turn, ...prevTurns];
      // console.log(updatedTurns);

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        currentPlayer: {activePlayer}
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" isActive={activePlayer === "X"} symbol="X" />
          <Player initialName="Player 2" isActive={activePlayer === "O"} symbol="O" />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

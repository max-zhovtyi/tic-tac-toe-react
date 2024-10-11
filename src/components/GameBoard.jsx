import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
  console.log('GameBoard() render, activePlayerSymbol: ', activePlayerSymbol);
  

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // Copy state.
      let newGameBoard = JSON.parse(JSON.stringify(prevGameBoard));

      // Modify new state.
      newGameBoard[rowIndex][colIndex] = activePlayerSymbol;      

      return newGameBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => { handleSelectSquare(rowIndex, colIndex); }}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

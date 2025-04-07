import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { WinnerModal } from "./components/WinnerModal";

import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { saveGameToStorage, resetGameFromStorage } from "./logic/storage";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ?? TURNS.X;
  });

  // null = no winner | false = tie | true = winner
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameFromStorage();
  };

  const updateBoard = (index) => {
    // Prevent overwriting a square
    if (board[index] || winner) return;

    // Update the board state
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Switch turns
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // save game state
    saveGameToStorage({ board: newBoard, turn: newTurn });

    // Check for a winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;

import { Square } from "./Square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const WinnerText = winner === false ? "It's a tie!" : "Winner!";

  return (
    <section className="winner">
      <div className="text">
        <h2>{WinnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Start new game</button>
        </footer>
      </div>
    </section>
  );
}

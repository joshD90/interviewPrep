import { useEffect, useState } from "react";
import Guess from "./Guess";
import fiveLetterWords from "./5letterWords";
import "./board.css";

export enum GuessCharStatus {
  UNDEFINED = -2,
  WRONGPOS = 0,
  INCORRECT = -1,
  CORRECT = 1,
}

const initialGuesses = new Array<GuessChar[]>(6).fill(
  new Array(5).fill({
    guessChar: "",
    guessStatus: GuessCharStatus.UNDEFINED,
  })
);

export type GuessChar = { guessChar: string; guessStatus: GuessCharStatus };

const Board = () => {
  const [guesses, setGuesses] = useState<GuessChar[][]>(initialGuesses);
  const [round, setRound] = useState(0);
  const [wordToGuess, setWordToGuess] = useState("");
  const [endGameMessage, setEndgameMessage] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * fiveLetterWords.length) - 1;
    setWordToGuess(fiveLetterWords[randomNumber]);
  }, []);

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuesses((prev) => {
      const updatedGuesses = prev.map((guess, index) => {
        if (index !== round) {
          return [...guess];
        }
        const newGuessArray = [...guess];

        for (let i = 0; i < 5; i++) {
          newGuessArray[i] = {
            guessChar: e.target.value[i] ?? "",
            guessStatus: GuessCharStatus.UNDEFINED,
          };
        }

        return newGuessArray;
      });

      return updatedGuesses;
    });
  };

  const checkGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (getGuessString(guesses[round]).length !== 5) return;
    if (getGuessString(guesses[round]) === wordToGuess) {
      setEndgameMessage(`YOU WON YOU LEGEND`);
      return;
    }
    setGuesses((prev) => {
      return prev.map((guess, index) => {
        if (index !== round) return guess;
        const updatedGuess = [...guess];

        for (let i = 0; i < 5; i++) {
          const currentChar = updatedGuess[i].guessChar;
          if (currentChar === wordToGuess[i]) {
            updatedGuess[i].guessStatus = GuessCharStatus.CORRECT;
            continue;
          }

          if (wordToGuess.includes(currentChar)) {
            updatedGuess[i].guessStatus = GuessCharStatus.WRONGPOS;
            continue;
          }

          updatedGuess[i].guessStatus = GuessCharStatus.INCORRECT;
        }
        return updatedGuess;
      });
    });
    if (round === 5) {
      setEndgameMessage(
        `You have lost, The Word Was ${wordToGuess.toUpperCase()}`
      );
      return;
    }

    setRound((prev) => prev + 1);
  };

  const getGuessString = (guessObj: GuessChar[]) => {
    return guessObj
      .map((el) => el.guessChar)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  };

  return (
    <section className="board">
      <h2>Word Of the Day</h2>

      <div className="guess-table">
        {guesses.map((_guess, index) => (
          <Guess guess={guesses[index]} key={index} />
        ))}
      </div>
      <form onSubmit={checkGuess} className="input-form">
        <div className="input-div">
          <label htmlFor="">Enter Your Guess Word Here</label>
          <input
            type="text"
            onChange={handleGuessChange}
            value={getGuessString(guesses[round])}
          />
        </div>
        <button>Submit Guess</button>
      </form>
      {endGameMessage !== "" && <h3>{endGameMessage}</h3>}
    </section>
  );
};

export default Board;

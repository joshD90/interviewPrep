import { useEffect, useState } from "react";
import Guess from "./Guess";

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
  const wordToGuess = "flight";

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
    if (getGuessString(guesses[round]) === wordToGuess) {
      console.log("YOU WON");
      return;
    }
    setGuesses((prev) => {
      console.log(JSON.parse(JSON.stringify(prev)), "prev before change");
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
    if (round === 6) return console.log("Game Over");
    setRound((prev) => prev + 1);
    console.log(Array.isArray(guesses[1]));
  };

  const getGuessString = (guessObj: GuessChar[]) => {
    return guessObj
      .map((el) => el.guessChar)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  };

  return (
    <section style={{ width: "100%", height: "100%" }}>
      <h2>Word Of the Day</h2>
      <button onClick={() => console.log(guesses, "GUESSES")}>
        Click Me For Guesses
      </button>
      <div style={{ width: "50%", height: "50%" }}>
        {guesses.map((guess, index) => (
          <Guess guess={guesses[index]} key={index} />
        ))}
      </div>
      <form onSubmit={checkGuess}>
        <label htmlFor="">Enter Your Guess Word Here</label>
        <input
          type="text"
          onChange={handleGuessChange}
          value={getGuessString(guesses[round])}
        />
      </form>
    </section>
  );
};

export default Board;

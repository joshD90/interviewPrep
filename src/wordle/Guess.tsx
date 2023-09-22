import { FC } from "react";
import { GuessChar, GuessCharStatus } from "./Board";

type Props = {
  guess: GuessChar[];
};

const empty5Array = new Array(5);

const Guess: FC<Props> = ({ guess }) => {
  const determineBackgroundColor = (charStatus: GuessCharStatus) => {
    switch (charStatus) {
      case GuessCharStatus.CORRECT:
        return "green";
      case GuessCharStatus.UNDEFINED:
        return "none";
      case GuessCharStatus.INCORRECT:
        return "red";
      case GuessCharStatus.WRONGPOS:
        return "rgb(154, 90, 1)";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      {Array.from(empty5Array).map((something, index) => (
        <span
          style={{
            padding: "2px",
            border: "solid 2px white",
            height: "20px",
            width: "20px",
            margin: "10px, 5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: determineBackgroundColor(guess[index].guessStatus),
          }}
          key={index}
        >
          {guess[index].guessChar.toUpperCase()}
        </span>
      ))}
    </div>
  );
};

export default Guess;

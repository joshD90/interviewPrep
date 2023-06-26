import React, { FC, useState } from "react";
import { Passenger } from "../classes/Passenger";

type Props = { children: React.ReactNode };
type PassengerContextType = {
  currentPassenger: Passenger | null;
  setCurrentPassenger: (passenger: null | Passenger) => void;
};

export const PassengerContext = React.createContext<PassengerContextType>({
  currentPassenger: null,
  setCurrentPassenger: () => {
    ("");
  },
});

export const PassengerContextProvider: FC<Props> = ({ children }) => {
  const [currentPassenger, setCurrentPassenger] = useState<null | Passenger>(
    null
  );

  return (
    <PassengerContext.Provider
      value={{ currentPassenger, setCurrentPassenger }}
    >
      {children}
    </PassengerContext.Provider>
  );
};

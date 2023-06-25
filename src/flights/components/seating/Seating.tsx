import { FC } from "react";

import "./seating.css";
import { Flight } from "../../classes/Flight";

type Props = { flight: Flight };

const Seating: FC<Props> = ({ flight }) => {
  return (
    <div className="seatingContainer">
      <div className="noseDiv"></div>
      <div className="leftWing"></div>
      <div className="rightWing"></div>
      <div
        className="seatingPlan"
        style={{
          gridTemplateColumns: `repeat(${flight.getSeatsAcross()},1fr)`,
        }}
      >
        {flight.getSeats().map((seat) => {
          return (
            <div
              className="seatDiv"
              key={
                seat.getSeatPosition().crossPosition +
                seat.getSeatPosition().row
              }
            >
              <p>{seat.getSeatPosition().row}</p>
              <p>{seat.getSeatPosition().crossPosition.toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seating;

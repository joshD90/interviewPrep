import { FC, useContext, useState } from "react";

import "./seating.css";
import { Flight } from "../../classes/Flight";
import { BookingManager } from "../../classes/Booking";
import { PassengerContext } from "../../context/PassengerContextProvider";
import Seat from "../../classes/Seats";

type Props = { flight: Flight };

const Seating: FC<Props> = ({ flight }) => {
  const { currentPassenger } = useContext(PassengerContext);
  const [stateSeats, setStateSeats] = useState(flight.getSeats());

  if (!currentPassenger) return <></>;
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
        {stateSeats.map((seat) => {
          return (
            <div
              className="seatDiv"
              key={
                seat.getSeatPosition().crossPosition +
                seat.getSeatPosition().row
              }
              style={{
                backgroundColor: `${seat.getPassenger() ? "#555" : ""}`,
              }}
              onClick={() => {
                BookingManager.bookOntoFlight(currentPassenger, flight, seat);
                setStateSeats([...flight.getSeats()]);
              }}
            >
              <p>{seat.getSeatPosition().row}</p>
              <p>{seat.getSeatPosition().crossPosition.toUpperCase()}</p>
              {seat.getPassenger() && (
                <div>{seat.getPassenger()?.getFirstName()}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seating;

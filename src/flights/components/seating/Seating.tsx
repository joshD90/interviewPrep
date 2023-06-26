import { FC, useContext, useState } from "react";

import "./seating.css";
import { Flight } from "../../classes/Flight";
import { BookingManager } from "../../classes/Booking";
import { PassengerContext } from "../../context/PassengerContextProvider";

type Props = { flight: Flight };

const Seating: FC<Props> = ({ flight }) => {
  const { currentPassenger } = useContext(PassengerContext);
  const [stateFlight] = useState<Flight>(flight);

  if (!currentPassenger) return <></>;
  return (
    <div className="seatingContainer">
      <div className="noseDiv"></div>
      <div className="leftWing"></div>
      <div className="rightWing"></div>
      <div
        className="seatingPlan"
        style={{
          gridTemplateColumns: `repeat(${stateFlight.getSeatsAcross()},1fr)`,
        }}
      >
        {stateFlight.getSeats().map((seat) => {
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
                console.log("booked");
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

import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./flight.css";
import { Flight as FlightClass } from "../../classes/Flight";

type Props = { flight: FlightClass };

const Flight: FC<Props> = ({ flight }) => {
  const navigate = useNavigate();

  return (
    <div className="flightContainer">
      <div className="flightDetailsContainer">
        <div className="flightDescription">
          <h3>Flight: {flight.getFlightName()}</h3>
        </div>
        <div className="flightTimesDiv">
          <div className="airportDetailsDiv">
            <p>Departure Airport</p>
            <h4>Airport: {flight.getDepartureAirport()}</h4>
            <p>Date: {flight.getDepartureDateTime().toLocaleDateString()}</p>
            <p>Time: {flight.getDepartureDateTime().toLocaleTimeString()} </p>
          </div>
          <div className="arrowDiv">
            <hr></hr>
          </div>
          <div className="airportDetailsDiv">
            <p>Arrival Airport</p>
            <h4>Airport: {flight.getArrivalAirport()}</h4>
            <p>Date: {flight.getArrivalDateTime().toLocaleDateString()}</p>
            <p>Time: {flight.getArrivalDateTime().toLocaleTimeString()} </p>
          </div>
        </div>
        <div className="proceedDiv">
          <h4>€{flight.getCostToDecimal()}</h4>
          <button onClick={() => navigate("/flight/seating")}>
            Proceed To Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flight;

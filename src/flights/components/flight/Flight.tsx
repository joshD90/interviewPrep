import { FC, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./flight.css";
import { Flight as FlightClass } from "../../classes/Flight";
import { PassengerContext } from "../../context/PassengerContextProvider";

type Props = { flight: FlightClass; flightIndex: string | null };

const Flight: FC<Props> = ({ flight, flightIndex }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { currentPassenger, setCurrentPassenger } =
    useContext(PassengerContext);
  console.log(flight, "flight");

  return (
    <div className="flightContainer">
      <h1>{currentPassenger?.getFirstName()}</h1>
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
          <button
            onClick={() =>
              navigate(`/flight/${flightIndex ? flightIndex : id}/seating`)
            }
          >
            Proceed To Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flight;

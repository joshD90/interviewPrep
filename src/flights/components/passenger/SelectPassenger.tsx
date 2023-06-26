import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./selectPassengers.css";
import allPassengers from "../../passengers";
import { PassengerContext } from "../../context/PassengerContextProvider";

const SelectPassenger = () => {
  const passengerContext = useContext(PassengerContext);
  const navigate = useNavigate();

  if (!passengerContext) return <></>;
  const { setCurrentPassenger } = passengerContext;

  const changePassenger = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPassenger(
      allPassengers[e.target.value.split(" ")[0].toLowerCase()]
    );
  };

  return (
    <div className="passengersContainer">
      <form>
        <div className="inputField">
          <label htmlFor="passengerList">Passenger</label>
          <select
            name="passengerList"
            id="passengerList"
            onChange={changePassenger}
          >
            {Object.values(allPassengers).map((passenger) => {
              return (
                <option key={passenger.getFirstName()}>
                  {passenger.getFirstName() + " " + passenger.getSecondName()}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={() => navigate("/flight/one")}>Go to Flight</button>
      </form>
    </div>
  );
};

export default SelectPassenger;

import { useParams } from "react-router-dom";
import Flight from "./Flight";
import flights from "../../flights";

const FlightContainer = () => {
  const { id } = useParams();

  return <>{id && <Flight flight={flights[id]} flightIndex={null} />}</>;
};

export default FlightContainer;

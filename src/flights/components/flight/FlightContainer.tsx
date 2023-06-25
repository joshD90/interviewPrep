import { useParams } from "react-router-dom";
import Flight from "./Flight";
import flights from "../../flights";

const FlightContainer = () => {
  const { id } = useParams();
  console.log(id);

  return <>{id && <Flight flight={flights[id]} />}</>;
};

export default FlightContainer;

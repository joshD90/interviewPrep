import { useParams } from "react-router-dom";

import Seating from "./Seating";
import flights from "../../flights";

const SeatingContainer = () => {
  const { id } = useParams();

  return <div>{id && <Seating flight={flights[id]} />}</div>;
};

export default SeatingContainer;

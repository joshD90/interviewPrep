import { FC } from "react";

import flights from "../../flights";
import Flight from "./Flight";

const AllFlights: FC = () => {
  return (
    <div>
      {Object.values(flights).map((flight, index) => {
        return (
          <Flight flight={flight} flightIndex={Object.keys(flights)[index]} />
        );
      })}
    </div>
  );
};

export default AllFlights;

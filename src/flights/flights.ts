import { Plane } from "./classes/Plane";
import { Flight } from "./classes/Flight";
import Seat from "./classes/Seats";

const flight123 = new Flight(
  "Airbus A300",
  "123",
  "Dublin",
  "London",
  new Date(1, 1, 2004, 0, 0, 0),
  new Date(1, 1, 2004, 2, 30, 0),
  100.99
);

export { flight123 };

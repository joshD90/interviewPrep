import { Plane } from "./classes/Plane";
import { Flight } from "./classes/Flight";
import Seat from "./classes/Seats";

type AllFlightsExport = { [key: string]: Flight };

const flight123 = new Flight(
  "Airbus A300",
  "123",
  "Dublin",
  "London",
  new Date(1, 1, 2004, 0, 0, 0),
  new Date(1, 1, 2004, 2, 30, 0),
  100.99
);

const flight456 = new Flight(
  "Boeing 737",
  "456",
  "London",
  "Dublin",
  new Date(2004, 1, 1, 0, 0, 0),
  new Date(2004, 1, 1, 2, 30, 0),
  50
);

const flight789 = new Flight(
  "Boeing 747",
  "789",
  "Dublin",
  "London",
  new Date(2004, 1, 1, 0, 0, 0),
  new Date(2004, 1, 1, 2, 30, 0),
  200.5
);

const flights: AllFlightsExport = {
  one: flight123,
  two: flight456,
  three: flight789,
};

export default flights;

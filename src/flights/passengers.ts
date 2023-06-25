import { Passenger } from "./classes/Passenger";

type AllPassengers = { [key: string]: Passenger };

const johnSmith = new Passenger("John", "Smith", 32);
const adamWalker = new Passenger("Adam", "Walker", 45);
const sarahJane = new Passenger("Sarah", "Jane", 30);
const lauraSims = new Passenger("Laura", "Sims", 20);

const allPassengers: AllPassengers = {
  john: johnSmith,
  adam: adamWalker,
  sarah: sarahJane,
  laura: lauraSims,
};
export default allPassengers;

import { Flight } from "./Flight";
import { Passenger } from "./Passenger";
import Seat from "./Seats";

export class BookingManager {
  static bookOntoFlight(passenger: Passenger, flight: Flight, seat: Seat) {
    if (seat.getPassenger() !== null)
      throw Error("Cannot book two people into the one seat");
    passenger.addFlight(flight);
    const allocatedSeat = flight.findPassengerSeat(passenger);
    allocatedSeat?.removePassenger();
    flight.addPassenger(passenger);
    seat.addPassenger(passenger);
  }

  static cancelBooking(passenger: Passenger, flight: Flight, seat: Seat) {
    passenger.removeFlight(flight);
    flight.removePassenger(passenger);
    seat.removePassenger();
  }
}

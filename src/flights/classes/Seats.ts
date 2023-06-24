import { Plane } from "./Plane";

export type SeatPosition = {
  row: number;
  crossPosition: string;
};

class Seat {
  private seatNumber: number;
  private seatPosition: SeatPosition = { row: 0, crossPosition: "a" };
  private plane: Plane;

  constructor(
    seatNumber: number,

    plane: Plane
  ) {
    //NEED TO CREATE A METHOD TO PROGRAMMATICALLY SET SEAT POSITION DEPENDING ON THE FLIGHT IT IS ON / PLANE SIZE

    this.plane = plane;
    this.seatNumber = seatNumber;
    this.setSeatPosition();
  }

  //getters
  public getSeatPosition() {
    return this.seatPosition;
  }
  public getPlane() {
    return this.plane;
  }
  public getSeatNumber() {
    return this.seatNumber;
  }

  //setters

  public setSeatNumber(seatNumber: number) {
    this.seatNumber = seatNumber;
  }

  //methods
  //set seat position based on the type of aircraft it is
  setSeatPosition() {
    const seatLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    this.seatPosition.row = Math.floor(
      this.seatNumber / this.plane.getSeatsAcross()
    );
    const crossPosition = this.seatNumber % this.plane.getSeatsAcross();
    this.seatPosition.crossPosition = seatLetters[crossPosition];
  }
}

export default Seat;

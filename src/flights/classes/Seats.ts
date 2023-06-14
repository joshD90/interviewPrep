export type SeatPosition = {
  row: number;
  crossPosition: string;
};

class Seat {
  private seatNumber: number;
  private seatPosition: SeatPosition;
  private flight: string;

  constructor(
    seatNumber: number,
    seatRow: number,
    crossPosition: string,
    flight: string
  ) {
    //NEED TO CREATE A METHOD TO PROGRAMMATICALLY SET SEAT POSITION DEPENDING ON THE FLIGHT IT IS ON / PLANE SIZE
    this.seatPosition = { row: seatRow, crossPosition: crossPosition };
    this.flight = flight;
    this.seatNumber = seatNumber;
  }

  //getters
  public getSeatPosition() {
    return this.seatPosition;
  }
  public getFlight() {
    return this.flight;
  }
  public getSeatNumber() {
    return this.seatNumber;
  }

  //setters
  public setSeatPosition(row: number, crossPosition: string) {
    this.seatPosition = { row: row, crossPosition: crossPosition };
  }

  public setFlight(flight: string) {
    this.flight = flight;
  }

  public setSeatNumber(seatNumber: number) {
    this.seatNumber = seatNumber;
  }
}

export default Seat;

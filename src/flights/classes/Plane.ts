import { PlaneTypes } from "./Flight";

export class Plane {
  private typeOfPlane: PlaneTypes;
  private numberOfSeats: number;
  private seatsAcross: number;

  constructor(typeOfPlane: PlaneTypes) {
    this.typeOfPlane = typeOfPlane;
    this.setSeatArrangement(typeOfPlane);
  }

  setSeatArrangement(typeOfPlane: PlaneTypes) {
    switch (typeOfPlane) {
      case "Airbus A300":
        this.numberOfSeats = 256;
        this.seatsAcross = 8;
        break;
      case "Boeing 737":
        this.numberOfSeats = 234;
        this.seatsAcross = 6;
        break;
      case "Boeing 747":
        this.numberOfSeats = 420;
        this.seatsAcross = 10;
        break;
      default:
        break;
    }
  }

  // Getters
  public getTypeOfPlane(): PlaneTypes {
    return this.typeOfPlane;
  }

  public getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

  public getSeatsAcross(): number {
    return this.seatsAcross;
  }

  // Setters
  public setTypeOfPlane(typeOfPlane: PlaneTypes): void {
    this.typeOfPlane = typeOfPlane;
    this.setSeatArrangement(typeOfPlane);
  }
}

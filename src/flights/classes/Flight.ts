import { Plane } from "./Plane";
import Seat from "./Seats";

export type PlaneTypes = "Boeing 747" | "Boeing 737" | "Airbus A300";
export type Airport = "Dublin" | "London";

export class Flight extends Plane {
  private flightName: string;
  private departureAirport: Airport;
  private arrivalAirport: Airport;
  private departureDateTime: Date;
  private arrivalDateTime: Date;
  private seats: Seat[] = [];
  private cost: number;

  constructor(
    typeOfPlane: PlaneTypes,
    flightName: string,
    departureAirport: Airport,
    arrivalAirport: Airport,
    departureDateTime: Date,
    arrivalDateTime: Date,
    cost: number
  ) {
    super(typeOfPlane);
    this.flightName = flightName;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.departureDateTime = departureDateTime;
    this.arrivalDateTime = arrivalDateTime;
    this.setSeats();
    this.cost = cost;
  }

  //methods
  private setSeats() {
    this.seats = Array.from(
      { length: this.getNumberOfSeats() },
      (_, index) => new Seat(index, this)
    );
  }

  // Getters
  public getFlightName(): string {
    return this.flightName;
  }

  public getDepartureAirport(): Airport {
    return this.departureAirport;
  }

  public getArrivalAirport(): Airport {
    return this.arrivalAirport;
  }

  public getDepartureDateTime(): Date {
    return this.departureDateTime;
  }

  public getSeats(): Seat[] {
    return this.seats;
  }

  public getArrivalDateTime(): Date {
    return this.arrivalDateTime;
  }

  public getCost(): number {
    return this.cost;
  }

  public getCostToDecimal(): string {
    return this.cost.toFixed(2);
  }

  // Setters
  public setFlightName(flightName: string): void {
    this.flightName = flightName;
  }

  public setDepartureAirport(departureAirport: Airport): void {
    this.departureAirport = departureAirport;
  }

  public setArrivalAirport(arrivalAirport: Airport): void {
    this.arrivalAirport = arrivalAirport;
  }

  public setDepartureDateTime(departureDateTime: Date): void {
    this.departureDateTime = departureDateTime;
  }

  public setArrivalDateTime(arrivalDateTime: Date): void {
    this.arrivalDateTime = arrivalDateTime;
  }

  public setCost(cost: number): void {
    this.cost = cost;
  }
}

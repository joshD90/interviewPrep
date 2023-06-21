import { Plane } from "./Plane";

export type PlaneTypes = "Boeing 747" | "Boeing 737" | "Airbus A300";
export type Airport = "Dublin" | "London";

export class Flight extends Plane {
  private flightName: string;
  private departureAirport: Airport;
  private arrivalAirport: Airport;
  private departureDateTime: Date;
  private arrivalDateTime: Date;

  constructor(
    typeOfPlane: PlaneTypes,
    flightName: string,
    departureAirport: Airport,
    arrivalAirport: Airport,
    departureDateTime: Date,
    arrivalDateTime: Date
  ) {
    super(typeOfPlane);
    this.flightName = flightName;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.departureDateTime = departureDateTime;
    this.arrivalDateTime = arrivalDateTime;
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

  public getArrivalDateTime(): Date {
    return this.arrivalDateTime;
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
}

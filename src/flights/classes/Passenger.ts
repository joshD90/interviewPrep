import { Flight } from "./Flight";

export class Passenger {
  private firstName: string;
  private secondName: string;
  private age: number;
  private flights: Flight[];

  constructor(firstName: string, secondName: string, age: number) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.flights = [];
  }

  // Getter for firstName
  getFirstName(): string {
    return this.firstName;
  }

  // Setter for firstName
  setFirstName(newFirstName: string) {
    this.firstName = newFirstName;
  }

  // Getter for secondName
  getSecondName(): string {
    return this.secondName;
  }

  // Setter for secondName
  setSecondName(newSecondName: string) {
    this.secondName = newSecondName;
  }

  // Getter for age
  getAge(): number {
    return this.age;
  }

  // Setter for age
  setAge(newAge: number) {
    this.age = newAge;
  }

  //flights methods
  public getFlights(): Flight[] {
    return this.flights;
  }

  public addFlight(flight: Flight): void {
    this.flights = [...this.flights, flight];
  }
  public removeFlight(flightToRemove: Flight): void {
    this.flights = this.flights.filter(
      (flight) => flight.getFlightName() !== flightToRemove.getFlightName()
    );
  }
}

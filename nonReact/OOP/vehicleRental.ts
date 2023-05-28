class Vehicle {
  protected uniqueId: string;
  protected make: string;
  protected model: string;
  protected yearOfManufacture: number;

  constructor(
    uniqueId: string,
    make: string,
    model: string,
    yearOfManufacture: number
  ) {
    this.uniqueId = uniqueId;
    this.make = make;
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
  }
  // Getters
  getUniqueId(): string {
    return this.uniqueId;
  }

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYearOfManufacture(): number {
    return this.yearOfManufacture;
  }

  // Setters
  setUniqueId(uniqueId: string): void {
    this.uniqueId = uniqueId;
  }

  setMake(make: string): void {
    this.make = make;
  }

  setModel(model: string): void {
    this.model = model;
  }

  setYearOfManufacture(yearOfManufacture: number): void {
    this.yearOfManufacture = yearOfManufacture;
  }
}

class Car extends Vehicle {
  private fuelType: "petrol" | "diesel" | "electric";
  private numberOfDoors: number;

  constructor(
    uniqueId: string,
    make: string,
    model: string,
    yearOfManufacture: number,
    fuelType: "petrol" | "diesel" | "electric",
    numberOfDoors: number
  ) {
    super(uniqueId, make, model, yearOfManufacture);
    this.fuelType = fuelType;
    this.numberOfDoors = numberOfDoors;
  }

  //getters
  getFuelType(): "petrol" | "diesel" | "electric" {
    return this.fuelType;
  }
  getNumberOfDoors(): number {
    return this.numberOfDoors;
  }

  //   setters
  setFuelType(fuelType: "petrol" | "diesel" | "electric"): void {
    this.fuelType = fuelType;
  }
  setNumberOfDoors(numberOfDoors: number): void {
    this.numberOfDoors = numberOfDoors;
  }
}

class Motorbike extends Vehicle {
  private engineSize: number;
  private fairing: boolean;

  constructor(
    uniqueId: string,
    make: string,
    model: string,
    yearOfManufacture: number,
    engineSize: number,
    fairing: boolean
  ) {
    super(uniqueId, make, model, yearOfManufacture);
    this.engineSize = engineSize;
    this.fairing = fairing;
  }

  //setters
  setEngineSize(engineSize: number): void {
    this.engineSize = engineSize;
  }
  setFairing(isPresent: boolean): void {
    this.fairing = isPresent;
  }

  //getters
  getEngineSize(): number {
    return this.engineSize;
  }
  getFairing(): boolean {
    return this.fairing;
  }
}

const car1 = new Car("abc", "Toyata", "Avensis", 2021, "diesel", 5);
const bike1 = new Motorbike("def", "Honda", "some model", 2018, 350, true);

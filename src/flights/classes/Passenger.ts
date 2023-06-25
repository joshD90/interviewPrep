export class Passenger {
  private firstName: string;
  private secondName: string;
  private age: number;

  constructor(firstName: string, secondName: string, age: number) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
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
}

// Define a class called Logger that takes the name of a file in its constructor 
// and provides a method for writing messages to that file. 
// Don’t worry about the actual file I/O operations. 
// Just define the class with the right members.
class Logger {
  constructor(public logFile: string) {}

  log(message: string) {}
}

// Given the Person class below, create a getter for getting the full name of a person.
class Personn {
  constructor(public firstName: string, public lastName: string) {}

  get fullname() {
    return this.firstName + ' ' + this.lastName
  }

  set fullname(value: string) {
    this.firstName = value;
  }
}

// Create a new class called Employee that extends Person and adds a new property called salary.
class Employee extends Personn {
  constructor(
    firstname: string,
    lastname: string,
    public salary: number
  ) {
    super(firstname, lastname)
  }
}

// Given the data below, define an interface for representing employees:
interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface Employees {
  name: string;
  salary: number;
  address: Address;
}
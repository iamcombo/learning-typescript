// creating class
  // class Account {
  //   id: number;
  //   owner: string;
  //   balance: number;

  //   constructor(id: number, owner: string, balance: number) {
  //     this.id = id;
  //     this.owner = owner;
  //     this.balance = balance;
  //   }

  //   deposite(amount: number): void {
  //     if(amount <= 0)
  //       throw new Error('Invalid amount!');

  //     this.balance += amount;
  //   }
  // }

// creating object
  // let account = new Account(1, 'combo', 0);
  // account.deposite(100);
  // console.log(account.balance);

// read-only and optional properties
  // class Account {
  //   readonly id: number;
  //   owner: string;
  //   balance: number;
  //   nickname?: string;

  //   constructor(id: number, owner: string, balance: number) {
  //     this.id = id;
  //     this.owner = owner;
  //     this.balance = balance;
  //   }
  // }

// access control keywords
  // class Account {
  //   id: number;
  //   owner: string;
  //   private _balance: number;

  //   constructor(id: number, owner: string, balance: number) {
  //     this.id = id;
  //     this.owner = owner;
  //     this._balance = balance;
  //   }

  //   deposite(amount: number): void {
  //     if(amount <= 0)
  //       throw new Error('Invalid amount!');
  //     // record a transaction
  //     this._balance += amount;
  //   }

  //   private calcTax() { } 

  //   getBalance(): number {
  //     return this._balance;
  //   }
  // }

  // let account = new Account(1, 'combo', 0);
  // // account.balance = -1;

// paramater properties
  // class Account {
  //   nickname?: string;

  //   constructor(
  //     public readonly id: number, 
  //     public owner: string,
  //     private _balance: number
  //   ) {}
  // }

// getters and setters
  class Account {
    nickname?: string;

    constructor(
      public readonly id: number, 
      public owner: string,
      private _balance: number
    ) {}

    get balance(): number {
      return this._balance;
    }

    // set balance(value: number) {
    //   if(value < 0)
    //     throw new Error('Invalid value!');
    //   this._balance = value;
    // }
  }

  let account = new Account(1, 'combo', 0);
  console.log(account.balance);
  // account.balance = 1;

// index signatures
  class SeatAssignment {
    // index signature property
    [seatNumber: string]: string;
  }

  let seats = new SeatAssignment();
  seats.A1 = 'Combo';

// static members
  class Ride {
    private static _activeRides: number = 0;

    start() { Ride._activeRides++ }
    stop() { Ride._activeRides-- }

    static get activeRides() {
      return Ride._activeRides;
    }
  }

  let ride1 = new Ride();
  ride1.start();

  let ride2 = new Ride();
  ride2.start();

  console.log(Ride.activeRides);

// inheritance
  class Person {
    constructor(
      public firstname: string,
      public lastname: string
    ) {}

    get fullName():string {
      return this.fullName + ' ' + this.lastname;
    }

    walking() {
      console.log('walking...')
    }
  }

  class Student extends Person {
    constructor(
      public studentId: number,
      firstname: string,
      lastname: string
    ) {
      super(firstname, lastname);
    }

    takeTest() {
      console.log('taking a test...');
    }
  }

  let student = new Student(1, 'Jonh', 'Wick');

// method and overriding
  class Teacher extends Person {
    override get fullName():string {
      return 'Professor: ' + super.fullName;
    }
  }

  let teacher = new Teacher('Jonh', 'Smith');
  console.log(teacher.fullName);

// polymorphism
  printNames([
    new Student(1, 'Ben', 'Zema'),
    new Teacher('Josh', 'Mario')
  ])

  function printNames(people: Person[]) {
    for(let person of people)
      console.log(person.fullName);
  }

// abstract classes and methods
  abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void;
  }
  class Circle extends Shape {
    constructor(public radius: number, color: string) {
      super(color);
    }

    override render(): void {
      console.log('rendering a circle');
    }
  }

  // let shape = new Shape('red');
  // shape.render();

// interfaces
  // abstract class Calendar {
  //   constructor(public name: string) {}

  //   abstract addEvent(): void;
  //   abstract removeEvent(): void; 
  // }

  interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
  }

  interface CloudCalendar extends Calendar {
    sync(): void;
  }

  class GoogleCalendra implements Calendar {
    constructor(public name: string) {}

    addEvent(): void {
      throw new Error("Method not implemented.");
    }
    removeEvent(): void {
      throw new Error("Method not implemented.");
    }
  }
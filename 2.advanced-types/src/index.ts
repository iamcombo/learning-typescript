// objects
  // let employee: { 
  //   readonly id: number, 
  //   name: string,
  //   retire: (date: Date) => void 
  // } = { 
  //   id: 1,
  //   name: '' , 
  //   retire: (date: Date) => {
  //     console.log(date);
  //   }
  // };

// type aliases
  type Employee = {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void 
  }

  let employee: Employee = { 
    id: 1,
    name: '' ,
    retire: (date: Date) => {
      console.log(date);
    }
  };

// union types
  function kgToLbs(weight: number | string): number {
    // Narrowing
    if(typeof weight === 'number') 
      return weight * 2.2;
    else 
      return parseInt(weight) * 2.2;
  }

  kgToLbs(10);
  kgToLbs('10kg');

// intersection types
  type Draggable = {
    drag: () => void
  };

  type Resizable = {
    resize: () => void
  };

  type UIWidget = Draggable & Resizable;

  let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
  }

// literal types (exact, specific)
  type Quantity = 50 | 100;
  let quantity: Quantity = 100;

  type Metric = 'cm' | 'inch';

  // nullable types
  function greet(name: string | null | undefined) {
    if(name)
      console.log(name.toUpperCase());
    else
      console.log('Hola!');
  }

  greet(null);  

// optional chaining
  type Customer = {
    birthday?: Date
  }

  function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
  }

  let customer = getCustomer(1);
  // Optional property access operator
  console.log(customer?.birthday?.getFullYear());

  // Optional element access operator 
  // customers?.[0]

  // Optional call
  let log: any = null;
  log?.('a');

// nullish coaelscing operator
  let speed: number | null = null;
  let ride = {
    // Falsy (undefined, null, '', false, 0)
    // Nullish coaelscing operator
    speed: speed ?? 30
  }

// type assertions
  let phone = <HTMLInputElement> document.getElementById('phone');
  // HTMLElement
  // HTMLInputElement
  phone.value

// the unknown type
  function render(document: unknown) {
    // Narrowing
    if(document instanceof WordDocument) {
      document.toUpperCase();
    }
    document.move(); 
  }

  let value: unknown = 'a';
  console.log(value.toUpperCase());

// the never type
  function reject(message: string): never {
    throw new Error(message);
  } 

  function processEvents(): never {
    while (true) {
      // read a message from a queue
    }
  }
  reject('...');
  console.log('Hello world');

  
// class decorators
  function Component(constructor: Function) {
    console.log('component decorator called')
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log('Inserting the component in the DOM')
    }
  }

  @Component
  class ProfileComponent {}

// parameterized decorators
  type ComponentOptions = {
    selector: string
  }

  function Component1(options: ComponentOptions) {
    return (constructor: Function) => {
      console.log('component decorator called');
      constructor.prototype.options = options;
      constructor.prototype.uniqueId = Date.now();
      constructor.prototype.insertInDom = () => {
        console.log('Inserting the component in the DOM')
      }
    }
  } 

  @Component1({ selector: '#abc'})
  class ProfileComponent {}

// decorator composition
  function Pipe(constructor: Function) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
  }

  @Component1({ selector: '#abc'})
  @Pipe
  class ProfileComponent {}

// method decorators
  function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function(...args: any) {
      console.log('Before');
      original.call(this, ...args);
      console.log('After');
    }
  }

  class Person {
    @Log
    say(message: string) {
      console.log('Person say:', message);
      
    }
  }

  let person = new Person();
  person.say('Hello')

// accessor decorator
  function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function() {
      const result = original?.call(this);
      return (typeof result === 'string') ?
        result.toUpperCase() : result;
    }
  }

  class Person1 {
    constructor(public firstname: string, public lastname: string) {}

    @Capitalize
    get fullName() {
      return `${this.firstname} + ' ' + ${this.lastname}`;
    }
  }

  let person1 = new Person1('jonh', 'wick'); 
  console.log(person1.fullName);

// property decorators
  function MinLength(length: number) {
    return (target: any, propertyName: string) => {
      let value: string;
      const descriptor: PropertyDescriptor = {
        get() { return value; },
        set(newValue: string) {
          if(newValue.length < length)
            throw new Error(`${propertyName} should be at least ${length} chars`)
        }
      }
      Object.defineProperty(target, propertyName, descriptor);
    }
  }

  class User {
    @MinLength(4)
    password: string;

    constructor(password: string) {
      this.password = password;
    }
  }

  let user = new User('abcd');
  console.log(user.password);
  
// paramater decorators
  type WatchedParamater = {
    methodName: string,
    paramaterIndex: number
  }

  const watchedParamater: WatchedParamater[] = [];

  function Watch(target: any, methodName: string, paramaterIndex: number) {
    watchedParamater.push({
      methodName,
      paramaterIndex
    })
  }

  class Vehicle {
    move(@Watch speed: number) {}
  }

  console.log(watchedParamater);
  
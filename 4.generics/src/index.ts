// generic classes
  class KeyValuePair<K, U> {
    constructor(
      public key: K,
      public value: U
    ) {}
  }

  let pair = new KeyValuePair<string, string>('1', 'a');
  // pair.key.

// generic functions
  function wrapInArray<T>(value: T) {
    return [value];
  }

  let number = wrapInArray('a');

// generic interfaces
  interface Result<T> {
    data: T | null;
    error: string | null;
  }

  function fetch<T>(url: string): Result<T> {
    return {
      data: null,
      error: null
    };
  }

  interface User {
    username: string;
  }

  interface Product {
    title: string; 
  }

  let result = fetch<User>('url');
  // result.data?.username;

// generic constraints
  function echo<T extends number | string>(value: T): T {
    return value;
  }

  function echo1<T extends {name: string}>(value: T): T {
    return value;
  }

  echo1({name: 'a'});

  interface Person {
    name: string;
  }

  function echo2<T extends Person>(value: T): T {
    return value;
  }

  class Person {
    constructor(public name: string) {}
  }

  function echo3<T extends Person>(value: T): T {
    return value;
  }

  class Customer extends Person {}

  echo(new Customer('a'));

// extending generic classes
  interface Product {
    name: string;
    price: number;
  }

  class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
      this._objects.push(obj);
    }
  }

  // pass on the generic type paramater
  class CompressibleStore<T> extends Store<T> {
    compress() {};
  }
  let store = new CompressibleStore<Product>();
  // store.compress();

  // restrict the generic type paramater
  class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name: string): T | undefined {
      return this._objects.find(obj => obj.name === name);
    }
  }

  // fix the generic type paramater
  class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
      return [];
    }
  }

// the keyof operator
  class Store1<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
      this._objects.push(obj);
    }

    find(property: keyof T, value: unknown): T | undefined {
      return this._objects.find(obj => obj[property] === value);
    }
  }

  let store1 = new Store1<Product>();
  store1.add({name: 'a', price: 1});
  store1.find('name', 'a');
  store1.find('price', 1);
  // store1.find('NonExistingProperty', 1);

// type mapping
  interface Product {
    name: string;
    price: number;
  }

  type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
  }

  type Optional<T> = {
    [K in keyof T]?: T[K]
  }

  type Nullable<T> = {
    [K in keyof T]: T[K] : null
  }

  let product: ReadOnly<Product> = {
    name: 'a',
    price: 1
  }
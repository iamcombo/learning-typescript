let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;
let level;
let g = [];

// function render(document) {
//   console.log(document);
// }

// array
let numbers: number[] = [1, 2, 3];

// tuples
let user: [number, string, boolean] = [1, 'combo', true]; 

// enums
  // const small = 1;
  // const medium = 2;
  // const large = 3;

  // PascalCase
  const enum Size { Small = 1, Medium, Large };
  let mySize: Size = Size.Medium;
  console.log(mySize);
  
// functions
function calculateTax(income: number, taxYear = 2022): number {
  if(taxYear < 2022) 
    return income * 1.1;
  if(income < 50_000)
    return income * 1.2;    
  return income * 1.3;
  // return '0'; type error becuase we declare the return type as number
}

calculateTax(10_000);

// objects
let employee: { 
  readonly id: number, 
  name: string,
  retire: (date: Date) => void 
} = { 
  id: 1,
  name: '' ,
  retire: (date: Date) => {
    console.log(date);
  }
};
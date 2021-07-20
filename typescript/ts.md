# TypeScript
[Source](https://www.codecademy.com/courses/learn-typescript)

## What is typescript
TypeScript (ts) code is a superset of Javascript code:
* ts code file has `.ts` extension
* ts code run throught typescript transcompiler. the transcompiler will check that code adheres to ts standards, and it will display errors when it does not
* if the ts code can be converted into javascript, the transcompiler will output a js version of the file
* ts also check `systax errors` before `run time`

## `tsconfig.json `
tsconfig file is placed in the root folder of the project, you can customize what rules you want the TypeScript compiler to enfore. Example:

```ts
{
    "compilerOptions":{
        "target": "es2017",
        "module": "commonjs",
        "strictNullChecks": true
    },
    "include": ["**/*.ts"]
}
```

Some propertties:
* `"compilerOptions"` : a object contains the rules for the ts compiler to enfore
  * `"target"`: version of ECMAScript standards for JavaScript
  * `"module"`: project will use [Common JS](https://nodejs.org/docs/latest/api/modules.html) syntax to import and export module
  * `"strictNullChecks`: variable can only have null or undefined
* `"include"`: determines what files the compiler applies the rules to. `["**/*.ts"]` mean compiler should check every single file that has a .ts extension

## Type
TypeScript expects the data type of the variable to match the type of the value initially assigned to it at its declaration

```js
let s:string
s = 1 // error
s = 'goodbye' // no error
let n:number
n = 2 // no error
n = '3' // error
```
when a variable isn't able to infer a type, typescript will consider a variable to be of type `any`

```js
let s
s = 'saasf'
s = 1
// no errors
```

## Functions
In TypeScripn, function parameter may be given type annotations with the same syntax as type annotations with the same syntax as variable declarations: a colon next to the name. The type annotations ensure that the parameters are of the correct type:

```js
function greet(name: string) {
    console.log(`Hello, ${name}!`)
}
greet('A') // Hello, A!
greet(1) // Error: argument '1' is not assignable to parameter of type 'string' 
```

Parameters that we do not provide type annotations for are assumed to be of type `any`, the same way variables are.

```js
function printKeyValue(key: string, value) {
  console.log(`${key}: ${value}`);
}
 
printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared
```

To indicate that a parameter is intentionally optional, we add a ? after its name. This tells TypeScript that the parameter is allowed to be undefined and doesn’t always have to be provided.

```js
function greet(name?: string) {
  console.log(`Hello, ${name|| 'Anonymous'}!`);
}
 
greet(); // Prints: Hello, Anonymous!
```

If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value’s type.

```js
function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}
```
The function `greet()` can receive a `string` or `undefined` as its name parameter—if any other type is provided as an argument, TypeScript will consider that a type error.

TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s return statements.

```js
function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}
 
const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.
```

If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis.
```js
function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
```

it is often preferred to use type annotations for functions, even when those functions don’t return anything. Example:
```js
function logGreeting(name: string){
  console.log(`Hello, ${name}!`)
}
```
The function logGreeting() simply logs a greeting to the console. There is no returned value, so we must treat the return type as void. A proper type annotation for this function would look like this:
```js
function logGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}
```

A documentation comment is denoted with the first line `/**` and a final line `/*` It’s common for each line within the comment to start with an `*`:
```js
/**
* This is a documentation comment
*/
```

### Array
The TypeScript type annotation for array types is fairly straightforward: we put [] after the element type. An alternative method is to use the Array<T> syntax, where T stands for the type.
```js
let names: string[] = ['A', 'B', 'C']
let values: Array<string> = ['E', 'F', 'G']
let nums: string[] = [1,2,3]; // Type Error!
```
We can also declare multidimensional arrays: arrays of arrays (of some type).
```js
let arr: string[][] = [['str1']]
```
The empty array ([]) is compatible with any array type:
```js
let names: string[] = []; // No type errors.
let numbers: number[] = []; // No type errors.
names.push('Isabella');  
numbers.push(30);
```

In TypeScript, when an array is typed with elements of specific types, it’s called a `tuple`.
```js
let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 
```
Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met:
```js
let numbersTuple: [number, number, number] = [1,2,3,4]; // Type Error! numbersTuple should only have three elements.
let mixedTuple: [number, string, boolean] = ['hi', 3, true] // Type Error! The first elements should be a number, the second a string, and the third a boolean. 
```
As far as JavaScript is concerned, tuples act just like arrays. They both have .length properties. We can access (or change) the elements of both using [index]. But despite their similarities, tuples and arrays do not have compatible types within TypeScript. Specifically, we can’t assign an array to a tuple variable, even when the elements are of the correct type:
```js
let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
tup = arr; // Type Error! An array cannot be assigned to a tuple.
```

Typescript work well with rest parameter
```js
function smush(firstString, ...otherStrings: string[]) {
    let output = firstString
    for(let i=0;i<otherStrings.length; i++) {
        output = output.concat(otherStrings[i])
    }
    return output
}
smush('a','h','h','H','H','H','!','!'); // Returns: 'ahhHHH!!'
smush(1,2,3) // Returns error
```

## Custom Types

### Enums
We use enums when we’d like to enumerate all the possible values that a variable could have.
```js
enum Direction {
  North,
  South,
  East,
  West
}
let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 
```

TypeScript also allows us to use enums based on strings, referred to as string enums. They are defined very similarly:
```js
enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
```

### Object Types
Here’s a type annotation for an object meant to represent a person:
```js
let aPerson: {name: string, age: number};
aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"}; // Type error: age property has the wrong type.
aPerson = {name: 'Kushim', yearsOld: 5000}; // Type error: no age property. 
aPerson = {name: 'User McCodecad', age: 22}; // Valid code. 
```

TypeScript places no restrictions on the types of an object’s properties. They can be enums, arrays, and even other object types
```js
let aCompany: {
  companyName: string, 
  boss: {name: string, age: number}, 
  employees: {name: string, age: number}[], 
  employeeOfTheMonth: {name: string, age: number},  
  moneyEarned: number
};
```

One great way to customize the types in our programs is to use type aliases.
These are alternative type names that we choose for convenience. We use the format type <alias name> = <type>
```js
type MyString = string;
let myVar: MyString = 'Hi'; // Valid code.
```
```js
type Person = { name: string, age: number };
let aCompany: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};
``` 

### Function type
Here’s an example of a function type that is only compatible with functions that take in two string arguments and return a number.
```js
type StringsToNumberFunction = (arg0: string, arg1: string) => number;
```
This syntax is just like arrow notation for functions, except instead of the return value we put the return type. A variable of type StringsToNumberFunction can be assigned any compatible function:
```js
let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};
 
myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
// Neither of these assignments results in a type error.
```
never be tempted to omit the parameter names or the parentheses around the parameters in a function type annotation, even if there is only one parameter. This code will not run!
```js
type StringToNumberFunction = (string)=>number; // NO
type StringToNumberFunction = arg: string=>number; // NO NO NO NO
```

### Generic Types
TypeScript’s generics are ways to create collections of types (and typed functions, and more) that share certain formal similarities.
```js
type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};
let aStringFamily: Family<string> = {
  parents: ['stern string', 'nice string'],
  mate: 'string next door', 
  children: ['stringy', 'stringo', 'stringina', 'stringolio']
}; 
```

### Generic Function 
We can also use generics to create collections of typed functions.
```js
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

stringArray = getFilledArray<string>('hi', 6)
numberArray = getFilledArray<number>(9, 6)
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age:24}, 6)
coordinateArray = getFilledArray<[number, number]>([3,4], 6)
```

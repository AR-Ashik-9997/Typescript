
### 1. What is TypeScript, and how is it different from JavaScript?

TypeScript is a superset of javascript. TypeScript Understands JavaScript and uses type inference to give you great tooling without additional code.

### 2. Can you explain the difference between "interface" and "type" in TypeScript?

    there are two different "interface" and "type" in TypeScript. such as

* The type alias can also be used for other types such as primitives,
  unions, and tuples.
* Unlike a type alias, an interface can be defined multiple times,
  and will be treated as a single interface

* Personally, I use the interface to make it clear that it
  is intended to be implemented and types for everything else.

### 3.Can you give an example of how to use generics in TypeScript?

```
// generics function using dynamic
function returnInput <T>(arg: T): T {
  return arg;
};

// static generics
const returnInputStr = returnInput<string>('Bangladesh');
const returnInputNum = returnInput<number>(54);

```
### 4. What is the difference between an "unknown" and "any" type in TypeScript?
* any — disables type checking and effectively allows all types to be used.
* unknown — similar to any but a safer alternative.
* TypeScript forces us to determine the type of the unknown value before we can work with it, but it doesn’t with the any value.
* We cannot assign unknown to anything but itself or any, while we can assign any to anything.
```
example
let anyValue: any = 1;
let unknownValue: unknown = 1;
let str: string;
str = anyValue; // No error
str = unknownValue; // We get a TypeScript error

```
### 5. Can you give an example of how to use enums in TypeScript?
```
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```
### 6. What is the "as" keyword used for in TypeScript?
The as keyword is a type assertion in typescript.Type assertion is used to tell the compiler that we want to treat any as a number, or string.
### 7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block.TypeScript uses some built-in JavaScript operators like typeof, instanceof, and the in operator, which is used to determine if an object contains a property. 
* The typeof type guard can be written in the following two ways:
typeof v !== "typename"
#or 
typeof v === "typename"
typename can be a string, number, symbol, or boolean.
```
example of typeof
function StudentId(x: string | number) {
    if (typeof x == 'string') {
        console.log('Student');
    }
    if (typeof x === 'number') {
        console.log('Id');
    }
}

example of in
  interface Adult {
    SSN: number;
  }
interface Person {
    name: string;
    age: number;
  }
  const getIdentifier = (person: Adult | Person) => {
    if ('name' in person) {
      return person.name;
    }
    return person.SSN;
  }
```

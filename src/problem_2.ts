interface Person {
  name: string;
  age: number;
}

function greaterThan18(arr: Person[]) {
  return arr.filter((person) => person.age >= 18);
}

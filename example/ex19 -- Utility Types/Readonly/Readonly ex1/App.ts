interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
// person.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
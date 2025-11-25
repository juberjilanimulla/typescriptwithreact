import React from "react";
import "./App.css";

let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// type Person = {
//   name: String;
//   age?: number;
// };

interface Person {
  name: string;
  any?: number;
}

type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: number;
  d: string;
};

let y: Y = {
  c: 30,
  d: "World",
};

// let lotsOfPeople: Person[];

// let person: Person = {
//   name: "Juber Mulla",
// };
let printName: (name: string) => never;
// function printName(name: String) {
//   console.log(name);

// }
// printName("Juber Mulla");

role = [5, "admin"];
name = "Juber";
age = "Twenty Five";

function App() {
  return <div className="App">Hello World</div>;
}

export default App;

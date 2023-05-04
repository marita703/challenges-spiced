import { createServer } from "node:http";
import Chance from "chance";

// export const server = …

const chance = new Chance();

const name1 = chance.name();
const age = chance.age();
const profession = chance.profession();

export const server = createServer((req, res) => {
  res.end(
    `Hello, my name is ${name1} and I am ${age} years old. I am a ${profession}`
  );
});

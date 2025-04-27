// var generateName = require("sillyname"); // => common js or cjs way to import packages
import generateName from "sillyname"; // => ES modules or ES module way to import packages (Add type as module in package.json file to specify import structure as ES module) sets the type of js files as ES modules

var sillyName = generateName();

console.log(`Hello, as sillyName my name is ${sillyName}`);

import { randomSuperhero } from "superheroes";
var randomSuperheroName = randomSuperhero();

console.log(`I am ${randomSuperheroName}!`);

export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

var LiveWriters= [];
for (let i=0; i< writers.length; i++) {
  if (writers[i].alive === true) {
    LiveWriters.push(writers[i]);
  }
}
console.log("Hi, my name is "+LiveWriters[0].firstName+" "+LiveWriters[0].lastName+". I am "+LiveWriters[0].age+" years old, and work as a "+LiveWriters[0].occupation+".");
console.log("Hi, my name is "+LiveWriters[1].firstName+" "+LiveWriters[1].lastName+". I am "+LiveWriters[1].age+" years old, and work as a "+LiveWriters[1].occupation+".");
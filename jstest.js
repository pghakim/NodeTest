/*
Create an array of objects (person object)
use array push, pop, slice, shift, unshift
Use array function on the person array to filter age > 18
print filtered list using forEach on the persons array
*/

let people = [
  {
    name: "Ian",
    age: "23",
    job: "Graphic Designer",
  },
  {
    name: "Patrick",
    age: "23",
    job: "Software Engineer",
  },
];

let John = {
  name: "John",
  age: "52",
  job: "Pilot",
};

let Grace = {
  name: "Grace",
  age: "15",
  job: "Student",
};

let Todd = {
  name: "Todd",
  age: "55",
  job: "Doctor",
};

people.push(John);
console.log("Pushed john" + JSON.stringify(people));

people.pop();
console.log("Popped john" + JSON.stringify(people));

people.splice(1, 0, Grace);
console.log("Spliced grace" + JSON.stringify(people));

people.unshift(Todd);
console.log("Unshifted todd" + JSON.stringify(people));

people.shift();
console.log("shifted todd" + JSON.stringify(people));

filteredList = people.filter((people) => people.age >= 18);
people.forEach((element) =>
  console.log("filtered list: " + JSON.stringify(filteredList))
);

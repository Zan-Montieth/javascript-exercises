const findTheOldest = function (people) {
  people = people
    .map((person) => {
      const container = {};
      if (person.yearOfDeath == undefined) {
        container.age = new Date().getFullYear() - person.yearOfBirth;
      } else {
        container.age = person.yearOfDeath - person.yearOfBirth;
      }
      container.name = person.name;
      return container;
    })
    .sort(function (a, b) {
      return b.age - a.age;
    });
  return people.shift();
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;

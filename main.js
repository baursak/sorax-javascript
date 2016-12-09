var person = {
    name: "sorax",
    age: 20,
    gender: "male"
};
console.log(person.name);
console.log(person["age"]); // the same as above
console.log(person.age);
console.log(person.gender);

// it's possible to update object props
person["age"] = 25;

// it's possible to add props
person.userId = 1;
console.log(person);
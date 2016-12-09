var person = {
    name: "sorax",
    age: 20,
    gender: "male",
    // it's possible to use function as prop
    sayHi: function(){
        return "Hello";
    }
};

console.log(person.sayHi());
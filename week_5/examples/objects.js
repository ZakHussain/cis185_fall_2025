let person = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  greet: function() {
    console.log("hello, my name is " + this.firstname);
  }
};

console.log(person.firstname)
person.greet();
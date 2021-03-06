//Create a class called Person which accepts the name of a person as a string,
//and their age as a number.
//The Person class should have a method called 
//describe which returns a string with the following syntax: "name, age years old".
//So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".


function Person(name, age){
    this.name = name;
    this.age = age;
    this.describe = function(){
        return name + ", " + age + " years old";
    }
}

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());
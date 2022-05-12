// declare 4 variables using 4 ways allowed 
//in JS containing values of 4 different data types
let x = 5;
var y = [1,2,3, 4];
const z = "constant";
 let  t = {
first: "Gevor",
second: "masnaget"
};

// declare 3 functions doing addition, subtraction
// and multiplication of 2 numbers using 3 ways allowed in JS
function add (x, y){
    return x + y;
}

function sub (x, y){
    return x - y;
}

function mul (x, y){
    return x * y;
}

 const add2 = function(x, y){
    return x + y;
}
const sub2 = function(x, y){
    return x - y;
}
const mul2 = function(x, y){
    return x * y;
}
 const add3=(x, y)=>{return x + y}
 const sub3=(x, y)=>{return x - y}
 const mul3=(x, y)=>{return x* y}
 const inc =(x)=>{return ++x}

 
   // add a method { curry } to the object { utils } that takes a function taking multiple argumets and returns a
   // function that can take the same amount of arguments one at a time
  const curry=(func)=>(x)=>{return func(x)}
  const CurriedGcd = (x) => (y) =>{
    num1 = Math.abs(x);
    num2 = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }     

 let utils = {
     // declare an object { utils } with a method to divide 2 numbers
     div(x, y){
         return x / y; 
     },
     // add the 3 functions created outside of the { utils }
     // object to the object without re-creating them
     add:add3,
     sub:sub2,
     mul:mul,
     // add a method to the object utils called { range }that takes 2 numbers and
     // creates an array containing all the numbers between those 2 in
     range (x, y){
         
        let arr = []
        if (x < y)
        {
            for(let i = x +1; i< y; i++) {
                arr.push(i);  
             }
             return arr
        }
        if (x > y)
        {
            for(let i = x -1; i> y; i--) {
                arr.push(i);  
             }
             return arr
        }
        return [x]

        
        
        
    },
    curryFunc:curry,
// add 2 new methods { capitalize } and { uppercase } to the object { utils } that take
// a string and respectively capitalize and uppercase it
     uppercase(str){return str.toUpperCase()},
     capitalize(str){
         const lower = str.toLowerCase()
         return str.charAt(0).toUpperCase() + lower.slice(1)
     }
 };
 // partially apply number 2 to the basic math methods of the object utils using the { curry }
 // method of the same object and save them in 4 new variables 
 const add_two = (num)=>{return num + 2}
 const mul_two=(num)=>{return num * 2}
 const sub_two=(num)=>{return num - 2}
 const div_two=(num)=>{return num / 2}
   console.log(curry(CurriedGcd)()(12))
   console.log(curry(add_two)(5))
 // create an array of numbers 1 to  10
 // using the { range } method of the object { utils }
let arr = utils.range(0,11)
// apply the 4 partially applied functions
// to the newly created array and save the results to 4 new variables
 arr1  = arr.map(add_two)
 arr2 = arr.map(mul_two)
 arr3 = arr.map(sub_two)
 arr4 = arr.map(div_two)
 // log to the console the results of those 4 variables in
 console.log(arr1)
 console.log(arr2)
 console.log(arr3)
 console.log(arr4)

console.log(utils.capitalize('asa'))

//create a factory function { Person } that takes a name,
// a last name and an age and returns a new person when called 

function createPerson(firstName, lastName, age) {
    
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      
    
  }
// const man =  Person("gexam", "Petrosyan", 50)
  
const man = new createPerson("gexam", "Petrosyan", 50)
console.log(man.age)
 // create another factory function called { Student } that 
 //inherits from { Person } with additional argument { University }
 // and returns a new student when applied in
 
 function createStudent  ( firstName, lastName, age, university){

     createPerson.call(this, firstName, lastName, age )

     this.university = university;

  }
  const stud =  new createStudent("Gevorg", "Grigoryan", 30, 'kons' )
  console.log(stud.firstName)
  //convert the { Person } and
   //{ Student } factory functions to use the class syntax
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  class Student extends Person {
    constructor(firstName, lastName, age, university) {
      super(firstName, lastName, age);
      this.university = university;

    }
    // add a method to the { Student } class named { celebrate } 
//that returns the string `I've graduated from ${this.university} Yaay!!!`
celebrate(){
    return `I've graduated from ${this.university} Yaay!!!`
}
  }
  // Create 3 new Students from 
  //the class { Student } with different { university } fields 
const stud1 = new Student("Narek", "Vardanyan",21, "EPH")
console.log(stud1.celebrate())
const stud2 = new Student("Karen", "Gevorgyan",23, "Fizkult")
const stud3 = new Student("Vardan", "Mercuri",24, "Petakan")
// assign to 3 variables the { celebrate } method calls for the 3 Students
const cel1 = stud1.celebrate()
const cel2 = stud2.celebrate()
const cel3= stud3.celebrate()
// log to console the 3 celebratory variables after applying them to the 
//{ uppercase } method of the { utils } object
console.log(utils.uppercase(cel1))
console.log(utils.uppercase(cel2))
console.log(utils.uppercase(cel3))
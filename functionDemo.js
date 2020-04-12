// Data types: 7 types
// There are 7 data types:

// number - for both floating-point and integer numbers,
// string - for strings,
// boolean - for logical values: true/false,
// null – a type with a single value null, meaning “empty” or “does not exist”,
// undefined – a type with a single value undefined, meaning “not assigned”,
// object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.



//This is known as Function Declaration
function add(a, b) {
    return a + b;
}

//This is known as Function Expression
let sum = function (i, j) {
    return i + j;
}

//Function Expressions are used when the output is dependent on  conditional code, example below:
let input = 10;
let output = (input > 10) ?
    function () { console.log(input * 2) } :
    function () { console.log(input - 2) };
output();

// Callback function as an example below
function ask(question, yes, no) {
    if (!question) yes()
    else no();
}

function showOk() {
    console.log('I am success')
}

function showCancel() {
    console.log('I am not Okay')
}

ask('Are you eligible', showOk, showCancel)// Here, the arguments showOk and showCancel are callback functions

//We can call the ask() as a Function Expressions like below:
ask('Are you eligible',
    function () { console.log('I am success'); },
    function () { console.log('I am not Okay'); });



//ARROW FUNCTIONS
let sum2 = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
alert(sum(1, 2)); // 3

//Multi-line arrow function: we need to write return keyword explicitely

let op = () => {
    let a = 1;
    return a;
}

//Arrow function does not have 'this': example below
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student)//Here, this will refer to the variable outside the function which is group.title, because arrow does not have 'this'
      );
    }
  };
  
  group.showList();

  //Arrow function can't be used as constructors, they can't be called with 'new'


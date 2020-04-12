//STRING

//find the length of a string
var str = "Pradeep";
console.log(str.length);

//find the 1st character of the string
console.log(str[0]);

let output = (str.length %2 ==0)? console.log('even') : console.log('length of string is an odd number');

let op = (a, b) => {
    // console.log('hi');
    if(str.length %2 == 0) console.log('1');
    else console.log('2');
    return true;
};
console.log(op(2, 3));


//ARRAY
var myArray = [[1,2,4], [3,67,4], [[0, 5, 55], [4,2]], 6];
console.log(myArray[2][0][1]);
console.log(myArray[3]);

//Manipulate array with push()
myArray.push(["hey"])
console.log(myArray);

var lastVal = myArray.pop();
console.log(lastVal); //print last element of an array, and will be removed from the original array
console.log(myArray);

var firstVal = myArray.shift();
console.log(firstVal); //print first element of an array, and will be removed from the original array

//unshift() will add element from left
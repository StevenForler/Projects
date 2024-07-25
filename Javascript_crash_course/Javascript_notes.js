// this is how you make a comment. it is a single line comment

// this is how you get any information from JavaScript that you can use to help debug your code basically JS equivalent to print()
console.log('hello world') 
// Also the Console log is really picky about having a comment next to it so running the log won't produce anything
console.log(4) 
console.log(4 + 4) 
// to add an apostrophe in a string you can use \' to help ignore it so it doesn't break the full string weirdly
console.log('I don\'t like how javascript works') 
// values are what data type something is. for example. strings are just sentences and integer are just whole numbers and there are more like that

Variables = "pretty straight forward"
// you're basically creating the equivalent of bucket that you will reuse to make your code much cleaner to process. can be used with any data type. but you bu
// 3notvariable = "can\'t use a number in the beginning or spaces in your variable"
// the first time you use a new variable you must initialize them.

var // this one isn't used much at all anymore but just know it is a thing 

let, explanation = "this is for when you know it will change and you'll let it change" // I don't understand why when not pre instantiated like below that this requires a comma and when pre-instantiated like below that it doesn't?
sentenceTWO = "like this sentence will be the new value for this variable since the initialization for let will 'let it change' "
const sentence = " you will use this if you know this variable will not ever change"

// you can also do this way of initializing your variables as well and don't need the declarations
let secondVariable
let firstVariable, thirdVariable

secondVariable = " why the fuck is this here?!"

// assignment by reference

let fourthVariable = secondVariable // any changes made to these let instantiated variables must happen before this variable.

// Data Types

271982398123 // Number

'This is a sentence' // string

null // absence of a value

undefined // Purposely wanting the value to be nothing

true && false // Booleans

let Fruit = {blueberries: "lovely with Yogurt", cherries: "great intense flavor." , Pomegranates: "Love it as Juice." , Tomatoes: secondVariable} // object or aka a dictionary which use key value pair.

// Array aka a list - similar to an object in that it store multiple values but it doesn't require keys to associate those values. Except for the index
// JS uses its indexing system base as 0 as its start. let example_array = [6, 7, 1, 2, 3, 9, 7, 8, 1, 2, 8, 9, 3, 7]


// you can pretty much assign any variable any data type.

//Functions and Methods are similar to each other. Methods are a function defined within a class. Functions are a declaration like let and const

// Here is an example of how to pass a function through a parameter and argument.
function newFunction(value, secondValue) //() is where to receive parameters/arguments and you have to give them a label of some sort even x,y works but that's confusing
    { // fun thing you can also run console in console.log(console) like this and its also just an object with other key paried values
        console.log(value * secondValue)
    //now pass your parameter and argument in as if they already have values
    }

    // to envoke or call a function you need to use its name with a set of parenthesis to run it
    // and to run an parameter/argument you then place the respective values you are wanting and then run the program to run the function.
newFunction(3, 5)
newFunction(6, 8)
newFunction(2, 9)

// Operators =(assignment), + (addition), -(subtraction) , *(multiplication) , % (remainder)
// Comparison operators ==(soft equal) can be used boolean cases, ===(strict equality) in cases to confirm if the data type is also the same too, !=(not equal) also used in boolean cases but negative. < , > , (were not mentioned yet)
// logic operators &&(and), ||(or), !(not).


let condition1 = true
let condition2 = false
console.log(condition1 && condition2) // if both are true then it will print true
console.log(condition1 || condition2) // if either are true then it will print true
console.log(!condition2) // this just prints the opposite value.
// some values like 0 or ' ' hold a false state and this might happen with other things as well.
// the element typeof in from of something you want to run will give you the data type of said value this is specific to only JavaScript console.log(typeof "this is a string!")

// If else conditional statements
// these are built in the same way a standard function is formatted instead of it running you have to pass a conditional requirement first before it actually runs the function.

if(condition1 && condition2) { //So as long the condition is considered "true" and so as long this is considered "true" then it will run
    console.log('hi mum')
} else if (condition1 || condition2){
    console.log('hi not mum')
} else {
    console.log('STRANGER DANGER!!!!!')
}

// loop conditional statements
// repeating a body of code multiple times until the single condition/argument has been met.

//While loop
let example_array = [6, 7, 1, 2, 3, 9, 7, 8, 1, 2, 8, 9, 3, 7]

let i = 0
let length = example_array.length
while (i < length){
    console.log('value was true: ', i, example_array[i]) //adding the variable and envoking it with a square bracket with an "i" in it gives the value at said index
    i = i +1 // this is stating the previous value of "i" is now equal to the previous value + 1 theres a couple of short hands that can be done for this i++ or i-- for decrementing the number
}

// For loop
// the difference in the two loops is (while) loops use 1 arguement, (for) loops use 3 aruments passing through the function
let example_array2 = [0, 1, 9, 4, 5, 6, 0, 5, 8, 6, 9, 4, 8, 5, 6, 9, 0, 8]

let j = 0
let gengar = example_array2.length
for (let j = 0; j < gengar; j++){
    if(j % 2 === 0){ //this line helps confirm if there are odd numbers by removing them.
        continue// this would keep the line going until the conditional statement is done
        //break could go here as well and would stop the program as soon as the conditional statement has been met.

    }
    console.log('value was true: ', j, example_array2[j])
}
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
// JS uses its indexing system base as 0 as its start.
let example_array = [6, 7, 1, 2, 3, 9, 7, 8, 1, 2, 8, 9, 3, 7]

// you can pretty much assign any variable any data type.

//Functions and Methods are similar to each other. Methods are a function defined within a class. Functions are a declaration like let and const

function newFunction() //() is where to receive parameters/arguments
    { // to envoke or call a function you need to treat it like an exisitng 

    }
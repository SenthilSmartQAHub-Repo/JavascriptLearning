

// Function Declaration
// Function Expression (Includes anonymous functions and arrow functions)
    // Arrow Function (Used on Arrays)
    // Anonymous Functions

// Function Declaration

//   function functionName(parameter1,parameter2.........)
//   {
//     //function block 
//   }

//   add(value1,value2)

function addToNumber()
{
    let a=10
    let b=20;
    console.log(a+b)
}
addToNumber()
addToNumber()
addToNumber()
addToNumber()
addToNumber()

//a ==> Mandatory parameter
//b ==> Default parameter(undefined, no values passed)
function add(a,b=1)
{
    console.log(a+b)
}
add(5,undefined)

//Arrow Function 

const display=()=>console.log("Welcome")


display()


//const addValue=(a,b)=>{a+b}
const addValue=(a,b)=>a+b
console.log(addValue(10,20))


//Anonymous Functions

const displayvalue=function (){
   console.log("test")
}

displayvalue()



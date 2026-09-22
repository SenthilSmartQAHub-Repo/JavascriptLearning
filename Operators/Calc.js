//Arithmetic Operators

// Operator	Symbol
// Addition	+
// Subtraction	-
// Multiplication	*
// Division	/
// Modulus	%
// Exponentiation	**
// Increment	++
// Decrement	--


// Assignment Operators
// Operator	Symbol
// Assignment	=
// Addition Assignment	+=       a=a+b or a+=b
// Subtraction Assignment	-=      a=a-b or a-=b
// Multiplication Assignment	*=     a=a*b or a*=b
// Division Assignment	/=        a=a/b  or a/=b
// Modulus Assignment	%=       a=a%=b  or a%=b
// Exponentiation Assignment	**=   a = a**b or a**=b


let a=10;
let b=20;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(20/5)  //11/2
console.log(11%2) //11%2
console.log(a ** b)
console.log(++a) //11
 console.log(--b) //19

 //a=a+b 
 a+=b
console.log(a)





// Equal	    ==
// Strict Equal   	===
// Not Equal	       !=
// Strict Not Equal	   !==
// Greater Than   	    >
// Less Than	          <
// Greater Than or Equal	>=
// Less Than or Equal	<=

let x=10
let y=30;

console.log(y>30) //false
console.log(y>=30) //true
console.log(x>30) //false
console.log(x>=10) //true

//  == loose equality operator(check only values)
//  === strict equality operator(check values and types)
console.log(10==10)
console.log(20===20)

console.log(10=="10")
console.log(10==="10")

//true = 1
//false =0
console.log(1==true)
console.log(0==false)
console.log(1===true)
console.log(0===false)

console.log(10!=10)
console.log(20!==20)


// Logical Operators
// Operator	Symbol
// Logical AND	&&
// Logical OR	||
// Logical NOT	!


// Logical AND	&&
// condition1  condidtion2
// true          true         => true 

console.log(10>5 && 10>6)
console.log(10>5 && 10<6)

// Logical OR	||
// condition1  condidtion2
// true          true         => true 
// false         true         => true
//true           false        => true
//false          false       = false


console.log(10>5 || 10>6)
console.log(10>5 || 10<6)


// Logical NOT	! true=> false, false=>true

console.log(!10>5)

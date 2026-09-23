
let firstname="Thomas"
let lastname="Willilam"
//  W i l l i a m
//  0 1 2 3 4 5 6
// -7-6-5-4-3-2-1
console.log(lastname.charAt(5))
console.log(lastname.at(5))
console.log(lastname.at(-5))
console.log(firstname.concat(lastname))
console.log(firstname.length)
console.log(lastname.indexOf('l'))
console.log(lastname.indexOf('i',3))
console.log(lastname.lastIndexOf('l'))

let AccountNumber="123"
console.log(AccountNumber.padEnd(5,"*"))
console.log(AccountNumber.padStart(11,"0"))


let message="welcome"
console.log(message.repeat(5))

console.log(message.slice(1,4)) //elc
console.log(message.slice(3)) //come
console.log(message.slice(0,3)) //wel

//message.substr()



let message1=" Created "
console.log(message1.trimStart())
console.log(message1.trimEnd())
console.log(message1.trim())

let address="Chennai"

console.log(address.toUpperCase())
console.log(address.toLowerCase())

let fullname="Thomas William"

console.log(fullname.split(" "))

let price="RS.1000"

console.log(price.split(".")[1])

let message3="This is good"

console.log(message3.replace("is","was"))
console.log(message3.replaceAll("is","was"))
console.log(message3.replace(" is"," was"))

let v1="HI" //Primitive type
const v2=new String("Hello") // object 

console.log(typeof(v1))
console.log(typeof(v2))

console.log(typeof(v2.valueOf()))
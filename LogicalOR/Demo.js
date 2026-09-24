
//Treats all falsy values (false, 0, "", null, undefined, NaN) as invalid.
console.log("Welcome" || 0)
console.log(false || 1000)
console.log("" || "abc")
console.log(null || "abc")
console.log(NaN || "abc")

console.log(10 || 1000)

let username=""
console.log(username||"user")
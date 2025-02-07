const accountId="1234567890"
console.log(accountId)
let accountEmail="chinmaya@gmail.com"
var accountPass="12345"
console.log(accountEmail)
console.log(accountPass)
/*
prefer not to use var because of scope problem. generally
we use let.
because of issue in block scope and functional scope we use let.
*/ 
//accountId shouldn't be changed because it is a constant variable.
accountEmail="chinu@gmail.com"
console.log(accountEmail)
accountPass="54321"
console.log(accountPass)

console.table({accountId,accountEmail,accountPass})
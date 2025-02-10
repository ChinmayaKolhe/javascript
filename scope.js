let a=10
const b=20
var c=30

//var is function scoped.  let and const are block scoped
// {} is a scope.

if (true){
    let a=100
    const b=200
    var c=300
    console.log(a,b,c) //block scope
}

console.log(a,b,c) //global scope
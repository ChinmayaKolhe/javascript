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

console.log(a,b,c) //global scope  //value of c is changed to 300 in global scope

//Nested Scope

function one(){
    const username="chinmaya"
    function two(){
        const website="github"
        console.log(username,website);   
    }
    //console.log(website); //website is not defined
    two()
}
one()

if(true){
    const username="chinmaya"
    if(username==="chinmaya"){
        const website="github"
        console.log(username+" "+website);   
    }
    //console.log(website); //website is not defined
}
//console.log(username); //username is not defined


//************************************************ */
//Hoisting
console.log(addone(5)); //function declaration is hoisted
function addone(value){
    return value+1
}
//const name=addone(6)   
//console.log(name);

//Function Declaration
//console.log(addTwo(5));    //function declaration is hoisted
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5));

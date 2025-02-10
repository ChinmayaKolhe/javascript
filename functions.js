//functions in javascript are objects and can be passed as arguments to other functions.

function sayMyName() {
  console.log("My name is Virat");
}
sayMyName();

function addTwoNums(num1, num2) {
  //console.log(num1+num2);
  return num1 + num2;
}
//addTwoNums(3,4)               //7

//addTwoNums(3,"4")             //34. The second argument is a string so the result is a string

//addTwoNums(3,"a")             //3a. The second argument is a string so the result is a string

const result = addTwoNums(4, 10);
console.log(result);

//function which prints result and doesn't return anything
function add(num1, num2) {
  console.log(num1 + num2);
}
//so the result is undefined for the below function call
const resultTwo = add(4, 10);
console.log(result); //undefined. The function does not return anything so the result is undefined


//function which returns a value
function loginUserMsg(username="Rohit") {
    if(!username){
        console.log("Please provide a username");
    }
    else{
        return `${username} is logged in`; 
    }
}
const loginMsg = loginUserMsg("virat"); //Virat is logged in
console.log(loginMsg);

const loginMsgTwo = loginUserMsg(); //Rohit is logged in
console.log(loginMsgTwo);
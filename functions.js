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


/***************************** */
function calculateCartPrice(val1,val2,...num1){     //Rest operator. It is used to pass a variable number of arguments to a function. 
    return num1;
}
const cartPrice = calculateCartPrice(200,400,500,6000); //200 =val1, 400=val2, 500,6000=num1
console.log(cartPrice);



function calculateCartPriceSecond(...num1){     //Rest operator. It is used to pass a variable number of arguments to a function. 
    return num1;
}
const cartPriceTwo = calculateCartPriceSecond(100,200,300,400); 
console.log(cartPriceTwo);

//functions with objects
const user={
    username:"Virat",
    age:35,
}
function handleobj(anyobj){
    console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);
}
handleobj(user);
handleobj({username:"Rohit",age:36});


//functions with array
const mynewArray=[100,200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(mynewArray)); //200

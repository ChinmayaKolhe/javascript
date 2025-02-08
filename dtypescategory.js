// Primitive types
// 7 types: string, number, boolean, null, undefined, symbol, bigint
let str="Hello"
let num=3
let bool=true
let nul=null   //null is an object
let undef=undefined  //undefined is undefined

//Symbol is a unique and immutable data type and may be used as an identifier for object properties.
let sym=Symbol("123")
let sym2=Symbol("123")

console.log(sym===sym2) //false because they are unique

//BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant.
let big=BigInt(123)
console.log(typeof str) //string
console.log(typeof num) //number
console.log(typeof bool) //boolean
console.log(typeof nul) //object
console.log(typeof undef) //undefined
console.log(typeof sym) //symbol
console.log(typeof big) //bigint
// null is an object
// undefined is undefined
// symbol is symbol
// bigint is bigint
// everything else is a primitive type



// reference (Non-Primitive)
//Array,Object,Functions
const cricketers=["Sachin","Rohit","Kohli"]
console.log(cricketers) 
//arrays are objects. 
let myobj={
    name:"chinmaya",
    age:19,
}
console.log(myobj)
//objects are objects. 

const myfun=function(){
    console.log("Hello")
}
//functions are objects. they are objects of the type function. (object function).
console.log(myfun)
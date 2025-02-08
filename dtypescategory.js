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


//************************* */
//stack and heap
//stack(Primitive types) and heap(Reference types/non-primitive types)
//stack is used for static memory allocation and heap for dynamic memory allocation, both stored in the computer's RAM .
//Variables allocated on the stack are stored directly to the memory and access to this memory is very fast, and it's allocation is dealt with when the program is compiled.
//Variables allocated on the heap have their memory allocated at run time and accessing this memory is a bit slower, but the heap size is only limited by the size of virtual memory .

let myname="chinmaya"
let anothername=myname
console.log(anothername) //chinmaya
anothername="chinu"
console.log(anothername) //chinu
console.log(myname) //chinmaya
//primitive types are stored in stack memory.
//when we change the value of anothername, myname is not changed. because they are stored in stack memory.
let userone={
    name:"chinmaya",
    age:19
}
let usertwo=userone
usertwo.name="chinu"
console.log(usertwo) //{ name: 'chinu', age: 19 }
console.log(userone) //{ name: 'chinu', age: 19 }
//reference types are stored in heap memory.
//when we change the value of usertwo, userone is also changed. because they are stored in heap memory.

//array
const myarray=[1,2,3,4,5,6,7,8,9,10];  //array of numbers

console.log(myarray[0]); //1

const myarray2=new Array("rohit","virat","rahul"); //array of strings
console.log(myarray2[0]); //rohit

//Array Methods
myarray.push(11); //add element at the end
console.log(myarray);
myarray.pop(); //remove element from the end
console.log(myarray);
myarray.unshift(9); //add element at the start
console.log(myarray);
myarray.shift(); //remove element from the start
console.log(myarray);

console.log(myarray.indexOf(5)); //4
console.log(myarray.includes(5)); //true;

const arrayTwo=myarray.join()
console.log(myarray); //1,2,3,4,5,6,7,8,9,10
console.log(arrayTwo); //1,2,3,4,5,6,7,8,9,10 

//slice,splice
console.log("A",myarray); //1,2,3,4,5,6,7,8,9,10 //original array //A
console.log(myarray.slice(2,5)); //3,4,5 //2 to 5th index

console.log(myarray.splice(2,5)); //3,4,5,6,7 //2 to 5th index  

//concat
const arrayThree=myarray.concat(myarray2);
console.log(arrayThree); //1,2,3,4,5,6,7,8,9,10,rohit,virat,rahul







let str="chinmaya"
let str2="virat"

console.log(str.concat(str2)) //chinmayavirat
console.log(str.concat(" ",str2)) //chinmaya virat
console.log(str+" "+str2) //chinmaya virat


console.log(`My name is ${str} ${str2}`) //My name is chinmaya virat

//string is an object. so we can use string methods
console.log(str.length) //8
console.log(str2.length) //5
console.log(str.charAt(0)) //c;
console.log(str.charAt(1)) //h;
console.log(str.charAt(2)) //i;
console.log(str.substring(0,3)) //chi
console.log(str.substring(0,9)) //chinmaya
console.log(str.indexOf("m")) //4
console.log(str.indexOf("z")) //-1;
console.log(str.indexOf("a")) //7
console.log(str.lastIndexOf("a")) //7
console.log(str.lastIndexOf("z")) //-1
console.log(str.slice(0,3)) //chi;
console.log(str.slice(0,9)) //chinmaya;
console.log(str.slice(-3)) //aya
console.log(str.slice(-3,-1)) //ay
console.log(str.slice(-3,-2)) //a
console.log(str.replace("chinmaya","chinmay")) //chinmay;
console.log(str.endsWith("a")) //true;
console.log(str.startsWith("c")) //true;
console.log(str.toLocaleLowerCase()) //chinmaya;
console.log(str.toLocaleUpperCase()) //CHINMAYA;
console.log(str.toLowerCase()) //chinmaya;
console.log(str.toUpperCase()) //CHINMAYA;
console.log(str.trim()) //chinmaya;
console.log(str.includes("m")) //true;
//split method is used to split the string by given character.
console.log(str.split("")) //[ 'c', 'h', 'i', 'n', 'm', 'a', 'y', 'a' ]; //split by empty string and remove empty string.
console.log(str.split("a")) //[ 'chinm', 'y', '' ]; //split by a and remove a. 











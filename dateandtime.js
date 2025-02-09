const date=new Date();
console.log(date);
console.log(date.toString()); // Wed Jun 30 2021 12:00:00 GMT+0530 (India Standard Time)
console.log(date.toDateString()); // Wed Jun 30 2021 
console.log(date.toUTCString()); // Wed, 30 Jun 2021 06:30:00 GMT
console.log(date.toISOString()); // 2021-06-30T06:30:00.000Z
console.log(date.toLocaleDateString()); // 6/30/2021

console.log(date.toTimeString()); // 12:00:00 GMT+0530 (India Standard Time)

console.log(date.getFullYear()); // 2021
console.log(date.getMonth()); // 5 // 0 based index
console.log(date.getDate()); // 30
console.log(date.getDay()); // 3 // 0 based index
console.log(date.getHours()); // 12
console.log(date.getMinutes()); // 0
console.log(date.getSeconds()); // 0
console.log(date.getMilliseconds()); // 0

console.log(typeof date); // object
let mycreatedDate=new Date(2025,1,2);
let mycreatedDateTwo=new Date(2025,1,2,5,3);
console.log(mycreatedDate.toDateString()); // Sun Feb 02 2024
console.log(mycreatedDateTwo.toLocaleDateString()); // 2/2/2025
console.log(mycreatedDateTwo.toTimeString()); // 5:03:00 GMT+0530 (India Standard Time)

let myTimeStam=Date.now()
console.log(myTimeStam); // 1625049000000
console.log(mycreatedDate.getTime()); // 1704374400000

///////////////////////
console.log(Math.floor(Date.now()/1000))

/*----------------------------------------------*/
let newDate=new Date();
console.log(newDate); // 2021-06-30T06:30:00.000Z
console.log(newDate.getMonth()+1); // 6
console.log(newDate.getDate()); // 30

newDate.toLocaleString('default',{    // 6/30/2021, 12:00:00 PM
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
});
console.log(newDate.toLocaleDateString()); // 6/30/2021
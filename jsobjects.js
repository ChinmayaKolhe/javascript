//objects can be declared using constructors and literals

//singleton=constructor

//object literals

const mysym=Symbol("my own symbol")

const Jsuser={
    name:"Chinmaya",
    age:25,
    [mysym]:"This is my own symbol",   //Symbol key. It is unique
    email:"chinmayakolhe2005@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday","Wednesday"],
    "College Name":"PCCOE" //String key
}
console.log(Jsuser);
console.log(Jsuser.name);
console.log(Jsuser["email"]);
console.log(Jsuser["College Name"]); //String key can't be access using dot operator
console.log(Jsuser[mysym]);

Jsuser.email="chinmaya@gmail.com"
console.log(Jsuser.email);
//Object.freeze(Jsuser)         //Freezing the object. No changes can be made to the object
Jsuser.age=30
console.log(Jsuser);//No changes can be made to the object

Jsuser.greetings=function(){
    console.log("Hello Js user");
}
Jsuser.greetingsTwo=function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());

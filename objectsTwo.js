const tinderUser=new Object()
console.log(tinderUser);

tinderUser.name="Chinmaya"
tinderUser.age=25
tinderUser.email="chinmaya@gmail.com"
console.log(tinderUser);

const regularUSer={    
    fullname:{
        firstname:"Chinmaya",
        middlename:"Bhushan",
        lastname:"Kolhe"
    }
}
console.log(regularUSer.fullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1, obj2}
console.log(obj3); 
const obj4=Object.assign(obj1,obj2)  //Merging two objects. obj1 is modified
console.log(obj4);
const obj5=Object.assign({},obj1,obj2) //Creating a new object. obj1 and obj2 are not modified

console.log(obj5);

const obj6={...obj1,...obj2} //Using spread operator
console.log(obj6);

const users=[
    {
        name:"Chinmaya",
        age:25,
        email:"chinmaya@gmail.com"
    },
    {
        name:"Chinmay",
        age:26,
        email:"chinmay@gmail.com"
    }
]
console.log(users[0].name);
console.log(users[1].name);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //Returns the keys of the object

console.log(Object.values(tinderUser)); //Returns the values of the object
console.log(Object.entries(tinderUser)); //Returns the key-value pairs of the object
console.log(tinderUser.hasOwnProperty("name")); //Checking if the object has the given key


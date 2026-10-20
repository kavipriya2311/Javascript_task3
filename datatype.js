var a = 10;
a = 20;
console.log(a); // 20

var b = 30;
var b = 50;
console.log(b); // 50

let c = 100;
c=200;
console.log(c); // 200

const age = 24;
console.log(age) // 24

/* valid declarations        invalid declarations
     var a                           var 5a 
     let ab                          let _a
     const a5                        const &2
     var a_2                         var 45
     
*/

var name = "kavi";
let age1 = 24;
const city = "Chennai"
console.log(name,age1,city); // kavi 24 Chennai

let k = prompt("what is your name");
alert(k);

let age2 = prompt("Enter your Age");
console.log(age2);

confirm("Do u know Javascript?");

let str = "priya";
let num = 20;
let boo = true;
let u ;
console.log("Type is:", typeof(str),"Value is:", str);
console.log("Type is:", typeof(num),"Value is:", num);
console.log("Type is:", typeof(boo),"Value is:", boo)
console.log("Type is:", typeof(u),"Value is:", u)

let Fruits = ["Apple","Mango","Grapes","Papaya","Guava"];
console.log("First Element:" + Fruits[0]);
console.log("Last Element:" + Fruits[4]);

let obj = {
     fruit : ["Apple","Orange","Watermelon"],
     Elec_items : ["IornBox","Drier"],
     Vegetable : "Brinjal"
}
console.log(obj.fruit);
console.log(obj.Elec_items);
console.log(obj.Vegetable);

let a1 = 15;
let a2 = 4;
console.log("Addition:" , a1+a2);
console.log("Subtraction:", a1-a2);
console.log("Multiplication:", a1*a2);
console.log("Division:", a1/a2);

let b1= 27;
let b2 = 5;
console.log(b1%b2);

let c1=3;
let c2=4;
console.log(c1**c2);

let m = 10;
console.log(++m);

let n = 10;
console.log(--n);

let x = 5;
let y = x++;

console.log(x);
console.log(y);


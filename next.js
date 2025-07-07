let day = 2;
switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  default: console.log("Invalid");
}

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}
const greet = function (){
    console.log("hello world");
}
greet();
const greetArrow =() =>{
    console.log("hello world");
}
greetArrow();

const geet = (a,b) =>{
    return a+b;
}
console.log(geet(2,3));
(
    function(){
        console.log("I am a developer");
    }
)();

(function (name){
    console.log("hello " + (name));
})("madhav");


const person = {
    name : "Saugat Giri",
    rollNumber : 1070,
    email : "saugatgiri1070@gmail.com",
    introduction : function (){
        console.log(`of course,it's me ${this.name}`)
    }
};

person.introduction();

console.log(typeof Object())
const introduction = new Object()
introduction.name = "Saugat Giri";
introduction.address = "Lamachaur,Pokhara";
console.log(introduction)

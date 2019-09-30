var age = prompt("What is your age?");
var square = Math.sqrt(age);

if((age % 2) && (age > 0)){
    console.log("Your age is an odd number!");
}

if((age > 0) && (square % 1 === 0)){
    console.log("Your age is is a perfect square!");

}

if(age < 0){
    console.log("Error! Wrong age provided.");
}

else if(age < 18) {
    console.log("Sorry,byt you're to young to enter.");
   }

else if (age < 21) {
    console.log("You may enter, but you can't drink.");
   }

else if (age == 21) {
    console.log("You may enter. Happy birthday!");
   }

else {
    console.log("You may enter. Have a fun!");
   
}

var secretNumber = 4;
var guess = Number(prompt("Guess the Secret Number!"));

if(guess === secretNumber){
    alert("Correct!")
}
else if (guess > secretNumber) {
    alert("To high! Try again!");
    
}
else {
    alert("To low! Try again!");
}
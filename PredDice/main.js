var pred1 = prompt("Guess the first dice! ");
var pred2 = prompt("Guess the second dice! ");
var intPred1 = parseInt(pred1);
var intPred2 = parseInt(pred2);
var dice1 = Math.random();
var dice2 = Math.random();
if (dice1 < 1 || dice2 < 1) {
    dice1 = Math.floor((dice1 + 1) * 6);
    dice2 = Math.floor((dice2 + 1) * 6);
    if (dice1 > 6) {
        dice1 = dice1 % 6;
    }
    if (dice2 > 6) {
        dice2 = dice2 % 6;
    }
}
if (dice1 == intPred1 && dice2 == intPred2) {
    alert("Your prediction is right");
} else {
    alert("Your prediction is wrong");
}
alert("first dice: " + dice1 + " second dice: " + dice2)
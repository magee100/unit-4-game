


// Array of computer & user choices //
var computerChoices = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]

var userChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Crystal Variables //
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

// Variables //
var wins = 0;
var losses = 0; 
var userTotal = 0;
var compChoice = 0;

//Make variables displayable
var userTotalText = document.getElementById("total-text")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")

    
// Functions //
 var startgame = function(){
     userTotal = 0;

     compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

     crystal1 = userChoices[Math.floor(Math.random() * userChoices.length)];

     crystal2= userChoices[Math.floor(Math.random() * userChoices.length)];

     crystal3 = userChoices[Math.floor(Math.random() * userChoices.length)];

     crystal4 = userChoices[Math.floor(Math.random() * userChoices.length)];

console.log(crystal1)
console.log(crystal2)
console.log(crystal3)
console.log(crystal4)
console.log(compChoice)

$("#userScore").html(userTotal);
$("#compScore").html(compChoice); 

} 



startgame();

$("#crystal1").on("click", function(){
    
    userTotal += crystal1;
    $("#userScore").html(userTotal);
    checkWin();
    console.log(userTotal);  

});

$("#crystal2").on("click", function(){
    
    userTotal += crystal2;
    $("#userScore").html(userTotal);
    checkWin();
    console.log(userTotal);

});

$("#crystal3").on("click", function(){
    
    userTotal += crystal3;
    $("#userScore").html(userTotal);
    checkWin();
    console.log(userTotal); 

});

$("#crystal4").on("click", function(){
    
    userTotal += crystal4;
    $("#userScore").html(userTotal);
    checkWin();
    console.log(userTotal);

});

console.log(userTotal)
var reset = function(){
    userTotal = 0;
    compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    crystal1 = userChoices[Math.floor(Math.random() * userChoices.length)];

    crystal2= userChoices[Math.floor(Math.random() * userChoices.length)];

    crystal3 = userChoices[Math.floor(Math.random() * userChoices.length)];

    crystal4 = userChoices[Math.floor(Math.random() * userChoices.length)];

    $("#compScore").html(compChoice); 

}

//   If/Else statements

var checkWin = function(){

    if (userTotal === compChoice){
        alert("winning ");
        wins ++;
        reset();
        console.log(wins)
        $("#wins").html(wins);
        $("#losses").html(losses);

    }
    else if (userTotal > compChoice){
        alert("suck ass shit heel");
        losses++;
        reset();
        console.log(losses)
        $("#wins").html(wins);
        $("#losses").html(losses);
    }

}




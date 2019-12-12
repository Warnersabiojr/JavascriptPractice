////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BREAKDOWN// IF/ELSE & CONDITIONAL STATEMENTS!!!//
/*if (true) {
  //any code placed here will be executed
}
 
if (false) {
  //any code placed here will be skipped over
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BREAKDOWN// FOR LOOP!!!//

//for var loopCounter = 0; < This creates a variable named loopCounter and sets its value to 0. 

//loopCounter <= 4; < states that the block of code that follows the condition will execute as long as loopCounter's value is less than or equal to 4. This is the test condition.

//loopCounter++, < adds 1 to the current value of loopCounter. Writing a ++ after a variable is a short-hand way of writing loopCounter = loopCounter + 1. 

//console.log(loopCounter);
//}

/*for (let loopCounter = 0; loopCounter <= 4; loopCounter++) {
    console.log(loopCounter);
}*/

//BREAKDOWN// FOR LOOP!!!// ENDING.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BREAKDOW// WHILE LOOP!!!//
/*let loopCounter = 0;
while (loopCounter <= 4) {
     console.log(loopCounter);
     loopCounter++
}*/

//let loopCounter = 0; < creates a variable named loopCounter and sets its value to 0 before entering the loop.
//The loop's condition is in the parentheses after while.
//The loop's counter is modified within the while loop.

//BREAKDOWN// WHILE LOOP!!!// ENDING.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BREAKDOWN// DO WHILE LOOP!!!//

/*do {
    userInput = prompt("Give me a number between 1 and 10.");
    if (userInput <= 0 || userInput > 10) {
        alert("The number must be between 1 and 10");
    }
} while (userInput > 10 || userInput <= 0);*/

//userInput is the valid number that you entered between 1 and 10.

// BREAKDOWN// DO WHILE LOOP!!!// ENDING.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BREAKDOWN!!!// POP UP FUNCTIONS//


//original code:

/*var likesCake = confirm("Do you like cake?");
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    alert("Your favorite cake is: " + favoriteCake);
} else {
    alert("The cake is a lie anyhow.");
} */





//checks to see if the use likes cake.
var likesCake = confirm("Do you like cake?"); 
//if the user likes cake, find out what the users favorite cake is.

if(likesCake) {
    var favoriteCake = prompt("What's your favorite cake?"); 
    // alert them that thier favorit cake is whatever is inputed.
    //from the prompt() function 
    alert("your favorite cake is: " + favoriteCake);
    
} else {
    // if the user dosent like cake, show them that cake is a lie.
    alert("Cake is a lie anyways.");
        
}


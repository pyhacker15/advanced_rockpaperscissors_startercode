//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice



// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.
let  winner;
let  userChoice = $("#usersInput").val();
const playerChoices = ["paper", "rock", "scissors"];
let computerChoice = (Math.floor(Math.random() * playerChoices.length));

//FUNCTIONS
 if (userChoice == playerChoices[0] && computerChoice == playerChoices[1] || userChoice == playerChoices[0] && computerChoice == playerChoices[2]) { 
    $("#winnerOutput").html("Computer Wins!");
    
}  else if (userChoice == playerChoices[1] && computerChoice == playerChoices[2] || userChoice == playerChoices[1] && computerChoice == playerChoices[0]) { 
    $("#winnerOutput").html("User Wins!");
    
} else { 
   $("#winnerOutput").html("It's a Tie");
} 

// DOCUMENT READY FUNCTION
// Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
document.ready(function() { 
    $("#shoot").click(function() { 
        $("#userChoice").append($("#usersInput").val());
    }); 
});









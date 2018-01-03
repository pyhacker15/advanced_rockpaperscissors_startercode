$( document ).ready( function() {
	$( "#shoot" ).click( function() {
		var userChoice = $( "#userInput" ).val();
		$( "#paragraph1" ).html( userChoice );
		var computerChoice = Math.random();
		if ( computerChoice < 0.34 ) {
			computerChoice = "rock";
		} else if ( computerChoice <= 0.67 ) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		}
		$( "#paragraph2" ).html( computerChoice );
		var compare = function( choice1, choice2 ) {
			if ( choice1 === choice2 ) {
				$( "#winnerOutput" ).html( "The Result is a Tie!" );
			} else if ( choice1 === "rock" ) {
				if ( choice2 === "scissors" ) {
					$( "#winnerOutput" ).html( "User Wins!" ); 
				} else {
					$( "#winnerOutput" ).html( "User Wins!" );
				}
			} else if ( choice1 === "paper" ) {
				if ( choice2 === "rock" ) {
					$( "#winnerOutput" ).html( "Computer Wins!" );
				} else {
					$( "#winnerOutput" ).html( "Computer Wins!" );
				}
			}
		};
		compare( userChoice, computerChoice );
	} );
} );


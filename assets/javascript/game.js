$(document).ready(function() {

	animals = ['assets/images/penguin.jpg','assets/images/tiger.jpg','assets/images/rhino.jpg','assets/images/panda.jpg'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newAnimals();
	newGame();

//Set random numbers for each of the 4 images.
//Use Math.Ceil to prevent 0  
	function newAnimals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageAnimal = $('<img>');
			imageAnimal.attr('data-num', numbers[i]);
			imageAnimal.attr('src', animals[i]);
			imageAnimal.attr('alt', 'animals');
			imageAnimal.addClass('animalImage')
			$('#animals').append(imageAnimal);
		}
	}

//Set number to guess randomly between 19 and 120
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.animalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

//If statement needed if counter and numberToGuess are equal, output 'You  win'
		    if (counter == numberToGuess){
		      $('#status').text('You win!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#animals').empty();
		      newAnimals();
			  newGame();
			  
//Else if counter is greater than numberToGuess, output 'You Lost' 		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#animals').empty();
		        newAnimals();
		        newGame();
		    }
		});
	}

});
/**
 * Created by esattahaibis on 2016-04-21.
 */
(function () {

	var dice1 = document.getElementById("dice1");
	var dice2 = document.getElementById("dice2");
	var text1 = document.getElementById("p1");
	var text2 = document.getElementById("p2");
	var btnRoll = document.getElementById("roll");
	var random ;

	btnRoll.addEventListener("click", function (event) {
		// preventing default action to take place
		event.preventDefault();
		// creating first random number between 1 and 6
		random = Math.floor((Math.random() * 6) + 1);
		// set image source and paragraph text to the number
		dice1.src = "contents/images/" + random + ".png";
		text1.innerHTML = " Dice1 is " + random;

		// same thing for second dice
		random = Math.floor((Math.random() * 6) + 1);
		dice2.src = "contents/images/" + random + ".png";
		text2.innerHTML = " Dice2 is " + random;
	});

})();
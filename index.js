var elt_name = document.getElementById("name");
var in_name = document.getElementById("input_name");
var elt_wel = document.getElementById("wel");
var elt_play = document.getElementById("play");
var player = document.getElementById("player");
var name = "";
var pscore = 0;
var cscore=0;
var options = document.querySelectorAll(".options button");
var playerscore = document.querySelector(".player h2");
var computerscore = document.querySelector(".computer h2");
var bord = document.getElementById("bord");
var input = document.querySelector(".text_name");
const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

function updateScore(pscore, cscore) {
	playerscore.textContent = pscore;
	computerscore.innerHTML = cscore;
}
function win(pc, cc) {
	bord.style.background="lightgreen";
	bord.textContent = "You WIN " + pc + " beats the computer choice " + cc;
	pscore++;
	

}
function lose(pc, cc) {
	bord.style.background="red";
	bord.textContent = "You LOSE cuz you choose " + pc + " and computer choose " + cc;
	cscore++;
	

}
function rename() {
	if (elt_name.value === "") {
		alert("please enter your name!");
	}
	else {
		name = elt_name.value;
		console.log(name);
		in_name.style.display = "none";
		elt_play.style.display = "inline";
		elt_wel.textContent = "welcome " + name + " good luck !";
		player.textContent = name;
	}


}
function compareHands(pc, cc) {
	if (pc === cc) {
		bord.style.fontSize = "30px";
		bord.style.background = "yellow";
		bord.style.color = "black";
		bord.textContent = "It's a DRAW! You and the computer choose a " + pc;
}
	else if (pc === "ROCK") {
		if (cc === "PAPER") {
			lose(pc, cc);
			updateScore(pscore, cscore);
}
		else {
			win(pc, cc);
			updateScore(pscore, cscore);
		}
	}
	else if (pc === "PAPER") {
		if (cc === "SCISSORS") {
			lose(pc, cc);
			updateScore(pscore, cscore);
}
		else {
			win(pc, cc);
			updateScore(pscore, cscore);
}
	}
	else {
		if (cc === "ROCK") {
			lose(pc, cc);
			updateScore(pscore, cscore);
}
		else {
			win(pc, cc);
			updateScore(pscore, cscore);
}
	}


}
function play() {
	options.forEach(option => {
		option.addEventListener("click", function () {
			if (name === "") {
				input.style.background = "red";
				input.style.width = "20vw";
				alert("enter your name before you play!");
			}
			else {
				var computerNumber = Math.floor(Math.random() * 3);
				var computerChoice = computerOptions[computerNumber];
				compareHands(this.textContent, computerChoice);
			}


		});
	});
}
play();
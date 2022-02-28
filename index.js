//Variables
var roll = document.querySelector(".roll");
var reset = document.querySelector(".reset");

var dice1 = document.querySelector(".img1");
var result1 = document.querySelector(".result1");

var dice2 = document.querySelector(".img2");
var result2 = document.querySelector(".result2");

var winner1 = 0;
var winner2 = 0;

var multiple = document.querySelector(".howMany");

var draw = document.querySelector(".draw");
var drawCounter = 0;

var total = document.querySelector(".total");
var totalCounter = 0;

//Roll The Dice
roll.addEventListener("click", function() {
  //Multiple Rolls

  if (multiple.valueAsNumber > 1) {
    while (multiple.valueAsNumber > 0) {

      //Player 1
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;

      //Player 2
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;

      //Total Counter
      ++totalCounter;

      //Win Counter
      if (randomNumber1 > randomNumber2) {
        ++winner1;
      } else if (randomNumber1 < randomNumber2) {
        ++winner2;
      } else {
        ++drawCounter;
      }
      --multiple.valueAsNumber;
    }
    //Outcome
    if (winner1 > winner2) {
      document.querySelector("h1").innerHTML = "🏴 Player 1 Wins";
    } else if (winner1 < winner2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins 🏴";
    } else {
      document.querySelector("h1").innerHTML = "🏳️Draw!🏳️";
    }

    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    result1.innerHTML = winner1
    result2.innerHTML = winner2
    draw.innerHTML = "No Winner: " + drawCounter;
    total.innerHTML = "Total Rolls: " + totalCounter;
  } else {

    //Single Roll

    //Player 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

    //Player 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    //Total Counter
    ++totalCounter;
    total.innerHTML = "Total Rolls: " + totalCounter;

    //Outcome
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🏴‍☠️ Player 1 Wins";
      ++winner1;
      result1.innerHTML = winner1
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins 🏴‍☠️";
      ++winner2;
      result2.innerHTML = winner2
    } else {
      document.querySelector("h1").innerHTML = "🏳️Draw!🏳️";
      ++drawCounter;
      draw.innerHTML = "No Winner: " + drawCounter;
    }
  }
  roll.classList.add("pressed");
  setTimeout(function() {
    roll.classList.remove("pressed");
  }, 100);
  var rollSound = new Audio('sounds/dice.wav');
  rollSound.play();
});

//Reset The Dice
reset.addEventListener("click", function() {
  document.querySelector("h1").innerHTML = "☠️Game Reset☠️";
  setTimeout(resetH1, 400);

  function resetH1() {
    document.querySelector("h1").innerHTML = "🏴‍☠️Roll Them Bones🏴‍☠️";
  };

  reset.classList.add("pressed");
  setTimeout(function() {
    reset.classList.remove("pressed");
  }, 100);

  dice1.setAttribute("src", "images/dice0.png");
  dice2.setAttribute("src", "images/dice0.png");
  result1.innerHTML = "-";
  result2.innerHTML = "-";
  winner1 = 0;
  winner2 = 0;
  totalCounter = 0;
  drawCounter = 0;
  total.innerHTML = "Total Rolls: -";
  draw.innerHTML = "No Winner: -";
});

JS exercises

/*
Simplify the if statement in this function.

*/
function workOrSleepIn(day) {
  if (day === 0) {
    return 'Sleep In';
  } else if (day === 1) {
    return 'Work';
  } else if (day === 2) {
    return 'Work';
  } else if (day === 3) {
    return 'Work';
  } else if (day === 4) {
    return 'Work';
  } else if (day === 5) {
    return 'Work';
  } else if (day === 6) {
    return 'Sleep In';
  } else {
    throw new Error('Invalid day: ' + day);
  }
}

//refactored code
function workOrSleepIn1(day){
  if ((day === 0) || (day === 6)){
    return 'Sleep in';
  } else if ((day >= 1) || (day <= 5)){
    return 'Work';
  } else{
    throw new Error('Invalid day:' + day);
  }
}

/*
Simplify the if statement in this function.
*/
function daysInMonth(month) {
  if (month === 1) {
    return 31;
  } else if (month === 2) {
    return 28;
  } else if (month === 3) {
    return 31;
  } else if (month === 4) {
    return 30;
  } else if (month === 5) {
    return 31;
  } else if (month === 6) {
    return 30;
  } else if (month === 7) {
    return 31;
  } else if (month === 8) {
    return 31;
  } else if (month === 9) {
    return 30;
  } else if (month === 10) {
    return 31;
  } else if (month === 11) {
    return 30;
  } else if (month === 12) {
    return 31;
  } else {
    throw new Error('Invalid month: ' + month);
  }
}

//refactored code
function daysInMonth1(month){
  switch (month){
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4: 
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      throw new Error('Invalid month: ' + month);   
  }
}

function daysInMonth2(month){
  if([1,3,5,7,8,10,12].indexOf(month) > -1){
    return 31;
  }else if([4,6,9,11].indexOf(month) > -1){
    return 30;
  }else if(month === 2){
    return 28;
  }else{
    throw new Error('Invalid month: ' + month);
  }
}

/*
Use array's map method to simplify this function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
function doubleArray(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function doubleArray1(numbers){
  return numbers.map(
    function(val){
      return val*2;
    }
  );
}

console.log(doubleArrayRefactored([1,4,6,9]));


/*
From this function, extract a new function row(n) which
creates a whose job is to create a row of n stars.

Bonus: write all of this code without using loops, but instead
using array's .map() and .join() method.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
function square(n) {
  var result = '';
  var counter = 0;
  var row = "";
  while (counter < n) {
    row = row + "*";
    counter++;
  }
  counter = 0;
  while (counter < n){
    result += row + "\n";
    counter++;
  }
  return result;
}

//refactored code
function row(n){
  var counter = 0;
  var row = "";
  while (counter < n){
    r += "*";
    counter++;
  }
  return r;
}

//no loops
function row(n){
  var row = Array(n).fill('*');
  var starRows = Array(n).fill(row);
  var result = starRows.join('\n');
  return result;
}

//even further cleaned up and succinct
function row(n){
  return Array(n).fill(Array(n).fill('*')).join('\n');
}

/*
From this function, extract a function pyramidRow(spaces, stars)
where both spaces and stars are numbers,
whose job is to return a string containing the given number of spaces and then the given number of stars.

Bonus: write all of this code without using loops, but instead
using array's .map() and .join() method.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
function pyramid(n) {
  var result = '';
  var counter = 0;
  while (counter < n) {
    var numSpaces = n - 1 - counter;
    var numStars = 1 + 2 * counter;
    var row = '';
    var spacesCounter = 0;
    while (spacesCounter < numSpaces) {
      row = row + ' ';
      spacesCounter = spacesCounter + 1;
    }
    var starsCounter = 0;
    while (starsCounter < numStars) {
      row = row + '*';
      starsCounter = starsCounter + 1;
    }
    result += row + '\n';
    counter = counter + 1;
  }
  return result;
}

function pyramidRow(spaces, stars){

}

/*
1. Extract a player variable within the for loop so that we
  don't have to write `players[i]` in 3 separate instances.
2. Rewrite the implementation entirely by:
  1. sorting the array in descending order by avgPoints using the .sort() method
  2. return the first item in the sorted array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
function highestPointAverage(players) {
  var highest = 0;
  var winner;
  for (var i = 0; i < players.length; i++) {
    if (players[i].avgPoints > highest) {
      highest = players[i].avgPoints;
      winner = players[i];
    }
  }
  return winner;
}

//refactored code
function highestPointAverage(players){
  var highest = 0;
  var winner;
  var array = [];
  for(var i = 0; i < players.length; i++){
    var p = players[i];
    array.push(p.avgPoints);
    }
    array.sort(function(a, b){
      return b-a}
      );
    return array[0];
  }

/*
1. Instead of using object literals to create objects inside
the for loop, create a Card constructor that takes point
and suit as parameters. Use the new statement to instantiate
the card objects in the for loop.
2. Bonus: use a for loop

*/
function newDeck() {
  var deck = [];
  for (var i = 1; i <= 13; i++) {
    deck.push({ point: i, suit: 'spades' });
    deck.push({ point: i, suit: 'hearts' });
    deck.push({ point: i, suit: 'clubs' });
    deck.push({ point: i, suit: 'diamonds' });
  }
  return deck;
}

//refactored code
function newDeck1(){
  var newDeck = [];
  for(var i = 1; i <=13; i++){
    newDeck.push(new Card(i, 'spades'));
    newDeck.push(new Card(i, 'hearts'));
    newDeck.push(new Card(i, 'clubs'));
    newDeck.push(new Card(i, 'diamonds'));
  }
  function Card(point, suit){
    this.point = point;
    this.suit = suit;
  }
  return newDeck;
}


/*
This function determines the winner of a roshambo game, a.k.a
rock paper sissors. It takes in 2 parameters:

* the throw of player 1, one of "rock", "paper", or "scissors"
* the throw of player 2, one of "rock", "paper", or "scissors"

If player 1 wins, the function returns "player 1", if player 2 wins, it returns "player 2". If it's a draw, it returns "draw".

What is the shorter (shortest) way to write this function?
*/
function roshambo(player1, player2) {
  if (player1 === 'rock' && player2 === 'scissors') {
    return 'player 1';
  } else if (player1 === 'rock' && player2 === 'paper') {
    return 'player 2';
  } else if (player1 === 'rock' && player2 === 'rock') {
    return 'draw';
  } else if (player1 === 'scissors' && player2 === 'rock') {
    return 'player 2';
  } else if (player1 === 'scissors' && player2 === 'scissors') {
    return 'draw';
  } else if (player1 === 'scissors' && player2 === 'paper') {
    return 'player 1';
  } else if (player1 === 'paper' && player2 === 'rock') {
    return 'player 1';
  } else if (player1 === 'paper' && player2 === 'paper') {
    return 'draw';
  } else if (player1 === 'paper' && player2 === 'scissors') {
    return 'player 2';
  }
}

//refactored code
function roshambo(player1, player2){
  var wins = {
    "rock": "scissors";
    "scissors": "paper";
    "paper": "rock";
  }
  if(wins[player1] == player2){
    return "player 1 wins";
  }else{
    return "player 2 wins";
  }
}

/*

*/
function ticTacToe(board) {
  // horizontal rows
  if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
    return 'O';
  }
  if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') {
    return 'O';
  }
  if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') {
    return 'O';
  }
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
    return 'X';
  }
  if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'O') {
    return 'O';
  }
  if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
    return 'X';
  }

  // vertical rows
  if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
    return 'O';
  }
  if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
    return 'O';
  }
  if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
    return 'O';
  }
  if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
    return 'X';
  }
  if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'O') {
    return 'O';
  }
  if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
    return 'X';
  }

  // diagonals
  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
    return 'O';
  }
  if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
    return 'O';
  }
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    return 'X';
  }
  if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    return 'X';
  }

  // no winner
  return null;
}

/*
The balls challenge: go to balls.html.
*/


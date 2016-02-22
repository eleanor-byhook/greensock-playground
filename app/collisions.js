'use strict'

var pizzaJS = require('./pizza.js');
var pizza = $('#pizza1');
var nyan = $('.nyan-cat');
var scoreBG = document.getElementById("score");
var pointsHTML = document.getElementById("points");

var collided = [];
var points = 0;

var start = function(){
  window.setInterval(function() {
    var collided = $('.nyan-cat').collision('#pizza1');
    if(collided.length){
      eatPizza();
      updatePoints();
      updateColor();
    }
  }, 250);
};

var eatPizza = function() {
  TweenMax.to(pizza, 0.1, {display: 'none'});
  TweenMax.to(pizza, 2, {display: 'inline', delay: 3});
}

var updatePoints = function() {
  ++points;
  pointsHTML.innerHTML = points;
  updateColor(points);
}

var updateColor = function(num) {
  switch (true) {
    case (num <= 3):
      break;
    case (num > 3 && num <= 7):
      scoreBG.style.backgroundColor="rgba("+188+","+68+","+255+","+1+")"; //purple
      break;
    case (num > 7 && num <= 11):
      scoreBG.style.backgroundColor="rgba("+15+","+174+","+255+","+1+")";//blue
      break;
    case (num > 11 && num <= 15):
      scoreBG.style.backgroundColor="rgba("+74+","+255+","+12+","+1+")"; //green
      pointsHTML.style.color="black";
      break;
    case (num > 15 && num <= 20):
      scoreBG.style.backgroundColor="yellow";
      pizzaJS.pizzaTween.timeScale = 2;
      break;
    case (num > 20 && num <= 25):
      scoreBG.style.backgroundColor="orange";
      break;
    case (num > 25 && num <= 35):
      scoreBG.style.backgroundColor="red";
      pointsHTML.style.color="white";
      pizzaJS.pizzaTween.timeScale = 2;
      break;
    case (num > 35):
      pointsHTML.style.marginTop = "4px";
      pointsHTML.innerHTML = "YOU WIN!";
      break;
    default:
      break;
  }
}

module.exports = {
  start: start
}


//jscs:disable maximumLineLength
'use strict';

var config = require('./config');
var $ = require('jquery');

var nyan  = $('.nyan-cat');
var space = $('.background-container');
var background1 = $('#background1');
var background1b = $('#background1b');
var background2 = $('#background2');
var background2b = $('#background2b');
var background3 = $('#background3');
var comet1 = $('.comet1');
var comet2 = $('.comet2');
var pizza = $('.pizza');
var text1 = $('#text1');
var text2 = $('#text2');
var textContainer = $('.text-container');

var mouseX = nyan.offset().left;
var mouseY = nyan.offset().top;

$(document).on('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  mouse(e);
});

/* Scrolling background */

//based on this example: http://netgfx.com/trunk/scrollingBG/
//RED
var left1 = background1.position().left;
console.log('left: ' + left1);
TweenMax.to(background1,7,{css:{left: left1-1976},repeatDelay:0,useFrames:false,ease: Linear.easeNone, repeat:-1});


//BLUE
var left2 = background2.position().left;
console.log('left2: ' + left2);
TweenMax.to(background2,14,{css:{left: left2-1976},repeatDelay:0,useFrames:false,ease: Linear.easeNone,repeat:-1});

//GREEN
var left3 = background3.position().left;
console.log('left3: '+ left3);
TweenMax.to(background3,21,{css:{left: left3-1976},repeatDelay:0,useFrames:false,ease: Linear.easeNone,repeat:-1});

/* Comets */
var comet1Tween = TweenMax.to(comet1, 1, {x: -1600, y: 0, opacity: 0, repeat: -1, repeatDelay: 1.5, ease: Linear.easeNone});
var comet2Tween = TweenMax.to(comet2, 1, {x: -1300, y: 0, opacity: 1, repeat: -1, delay: 1, repeatDelay: 2.5});


/* Intro - two text panels, switch to space view, show nyan and comets */
var tl = new TimelineMax();

tl.to(textContainer, 1, {opacity: 1}, 0)
  .from(text1, 3, {opacity:0})
  .to(text1, 1.5, {opacity: 0})
  .from(text2, 3, {opacity: 0})
  .to(text2, 1.5, {opacity: 0})
  .to(space, 1, {opacity: 1})
  .to([nyan, comet1Tween, comet2Tween], 2, {display: 'inline'})
  .insert(comet1Tween, 0)
  .insert(comet2Tween, 0);

/* Mouse handling events -  set new location based on mouse hover */
var loop = setInterval(function() {
  var newX = nyan.offset().left;
  var newY = nyan.offset().top;
  newX += (mouseX - newX) / 5;
  newY += (mouseY - newY) / 5;
  nyan.css({left: newX, top: newY});
}, 30);

/* TODO nyancat rotation based on mouse location
function mouse(event) {
  if (nyan.length) {
    var center_x = (nyan.offset().left + (nyan.width() / 2));
    var center_y = (nyan.offset().top + (nyan.height() / 2));
    mouse_x = event.pageX;
    mouse_y = event.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = parseInt((radians * (180 / Math.PI) * -1) + 90);
    $(nyan).css('-moz-transform', 'rotate(' + degree + 'deg)');
    $(nyan).css('-webkit-transform', 'rotate(' + degree + 'deg)');
    $(nyan).css('-o-transform', 'rotate(' + degree + 'deg)');
    $(nyan).css('-ms-transform', 'rotate(' + degree + 'deg)');

  }
}
*/

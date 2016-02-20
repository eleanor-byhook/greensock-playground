//jscs:disable maximumLineLength
'use strict';

var config = require('./config');
var $ = require('jquery');

var nyan = $('.nyan-cat');
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

var mouseX = nyan.offset().left + 600;
var mouseY = nyan.offset().top + 350;
var SPEED = 8; //Speed of space flight
var BOOST_SPEED = 4;

$(window).load( function () {
  window.cat.parent.frame_227();
  console.log(window.cat);
})

$(document).on('mousemove', function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

/* Scrolling background */

//fast
var left1 = background1.position().left;
var fastSpace = TweenMax.to(background1, SPEED, {
  css: {left: left1 - 1976},
  repeatDelay: 0,
  useFrames: false,
  ease: Linear.easeNone,
  repeat: -1
});

//medium
var left2 = background2.position().left;
var mediumSpace = TweenMax.to(background2, (SPEED*2), {
  css: {left: left2 - 1976},
  repeatDelay: 0,
  useFrames: false,
  ease: Linear.easeNone,
  repeat: -1
});

//slow
var left3 = background3.position().left;
var slowSpace = TweenMax.to(background3, (SPEED*4), {
  css: {left: left3 - 1976},
  repeatDelay: 0,
  useFrames: false,
  ease: Linear.easeNone,
  repeat: -1
});

var boost = function(speed) {
  fastSpace.timeScale(speed);
  mediumSpace.timeScale(speed);
  slowSpace.timeScale(speed);
};

$(document).keydown(function(e) {
  if(e.keyCode === 32) {
    boost(BOOST_SPEED);
    window.cat.frame_24(); //cat head
    window.cat.frame_39(); // cat tail boost
  }
});

$(document).keyup(function(e) {
  if(e.keyCode === 32) {
    window.cat.frame_60(); //reset to default state
    boost(SPEED/4)
  }
});


/* Comets */
var comet1Tween = TweenMax.to(comet1, 1, {
  x: -1600,
  y: 0,
  display: 'inline',
  opacity: 0,
  repeat: -1,
  repeatDelay: 1.5,
  ease: Linear.easeNone
});

var comet2Tween = TweenMax.to(comet2, 1, {
  x: -1600,
  y: 0,
  display: 'inline',
  opacity: 1,
  repeat: -1,
  delay: 1,
  repeatDelay: 2.5,
  ease: Linear.easeNone
});

/* Intro - two text panels, switch to space view, show nyan and comets */
var tl = new TimelineMax();
//
tl.to(textContainer, 0.1, {opacity: 0})
  //.to(textContainer, 1, {opacity: 1}, 0)
  //.from(text1, 2, {opacity:0})
  //.to(text1, 0.5, {opacity: 0})
  //.from(text2, 2, {opacity: 0})
  //.to(text2, 0.5, {opacity: 0})
  .to(space, 0.1, {opacity: 1})
  .to(nyan, 0.1, {display: 'inline'})
  .append([comet1Tween, comet2Tween]);


/* Mouse handling events -  set new location based on mouse hover */
var loop = setInterval(function () {
  var newX = nyan.offset().left - 130; //centers mouse to middle of pop-tart
  var newY = nyan.offset().top - 30;
  newX += (mouseX - newX) / 3;
  newY += (mouseY - newY) / 3;
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

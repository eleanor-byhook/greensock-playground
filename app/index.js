//jscs:disable maximumLineLength
'use strict';

var config = require('./config');
var $ = require('jquery');

var nyan  = $('.nyan-cat');
//var space = $('.background-container');
var background1 = $('#background1');
var background2 = $('#background2');
var background3 = $('#background3');
var comet1 = $('.comet1');
var comet2 = $('.comet2');
var pizza = $('.pizza');
var text1 = $('#text1');
var text2 = $('#text2');
var textContainer = $('.text-container');

$(document).on('mousemove', mouse);
/*
function tweenAngle(degrees) {
  var x = 0;
  var y = 0;
  switch(degrees) {
    case degrees >= -90 && degrees < 45:
          return
  }
};
*/

//based on this example: http://netgfx.com/trunk/scrollingBG/
var left1 = background1.position().left;
console.log('left: ' + left1);
TweenMax.to(background1,7,{css:{left: left1-1976},repeatDelay:0,useFrames:false,ease: Linear.easeNone, repeat:-1});

var left2 = background2.position().left;
console.log('left2: ' + left2);
TweenMax.to(background2,7,{css:{left: left2-1976},repeatDelay:0,useFrames:false,ease: Linear.easeNone,repeat:-1});

var left3 = background3.position().left;
console.log('left3: '+ left3);
TweenMax.to(background3,7,{css:{left: left3-1976},repeatDelay:0,useFrames:false,ease: Linear.easeNone,repeat:-1});


//var spaceTween = TweenMax.to(space, 8, {backgroundPosition: '-1% 99%', repeat: -1, repeatDelay: 0, ease: Power0.easeNone});
//var nyanTween = TweenMax.to(nyan, 10, {x: 350, y: 0});
//var comet1Tween = TweenMax.to(comet1, 1, {x: -1600, y: 0, opacity: 0, repeat: -1, repeatDelay: 1.5, ease: ease: Linear.easeNone});
//var comet2Tween = TweenMax.to(comet2, 1, {x: -1300, y: 0, opacity: 1, repeat: -1, delay: 1, repeatDelay: 2.5});

var tl = new TimelineMax();

/*
tl.to(textContainer, 0.25, {opacity: 1}, 0)
  .from(text1, 1, {opacity:0})
  .to(text1, 1.5, {opacity: 0})
  .from(text2, 1, {opacity: 0})
  .to(text2, 1.5, {opacity: 0})
  .to(spaceTween, 2, {opacity: 1})
  .insert(comet1Tween, 0)
  .insert(comet2Tween, 0);

TweenMax.to(pizza, 2, {opacity: 0, repeat: -1, yoyo: true, delay: 0});
*/
// console.log("Y: " + event.pageY);

function mouse(event) {
  if (nyan.length) {
    var center_x = (nyan.offset().left + (nyan.width() / 2));
    var center_y = (nyan.offset().top + (nyan.height() / 2));
    var mouse_x = event.pageX;
    var mouse_y = event.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = parseInt((radians * (180 / Math.PI) * -1) + 90);
    var items = nyan;
    items.each(function(index, element) {
      $(this).css('-moz-transform', 'rotate(' + degree + 'deg)');
      $(this).css('-webkit-transform', 'rotate(' + degree + 'deg)');
      $(this).css('-o-transform', 'rotate(' + degree + 'deg)');
      $(this).css('-ms-transform', 'rotate(' + degree + 'deg)');
    });
    //console.log(degree);
  }
};

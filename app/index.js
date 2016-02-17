//jscs:disable maximumLineLength
'use strict';

var config = require('./config');

var nyan  = document.getElementsByClassName('nyan-cat');
var space = document.getElementsByClassName('container');
var comet1 = document.getElementsByClassName('comet1');
var comet2 = document.getElementsByClassName('comet2');
var pizza = document.getElementsByClassName('pizza');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var textContainer = document.getElementsByClassName('text-container');

var spaceTween = TweenMax.to(space, 13, {backgroundPosition: '-100%', repeat: -1, repeatDelay: -1, ease: Linear.easeNone});
var nyanTween = TweenMax.to(nyan, 10, {x: 500, y: 0});
var comet1Tween = TweenMax.to(comet1, 1, {x: -1600, y: 0, opacity: 0, repeat: -1, repeatDelay: 1.5, ease: Linear.easeNone});
var comet2Tween = TweenMax.to(comet2, 1, {x: -1300, y: 0, opacity: 1, repeat: -1, delay: 1, repeatDelay: 2.5});

var tl = new TimelineMax();spaceTween;

/*
tl.to(textContainer, 0.25, {opacity: 1}, 0)
  .from(text1, 1, {opacity:0})
  .to(text1, 1.5, {opacity: 0})
  .from(text2, 1, {opacity: 0})
  .to(text2, 1.5, {opacity: 0})
  .to(space, 2, {opacity: 1})
  .append(nyanTween, -2)
  .insert(comet1Tween, 0)
  .insert(comet2Tween, 0);
*/
//TweenMax.to(pizza, 2, {opacity: 0, repeat: -1, yoyo: true, delay: 0});


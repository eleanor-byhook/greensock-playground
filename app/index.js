'use strict';

var config = require('./config');

var nyan  = document.getElementsByClassName('nyan-cat');
var space = document.getElementsByClassName('container');
var comet1 = document.getElementsByClassName('comet1');
var comet2 = document.getElementsByClassName('comet2');
//var pizza = document.getElementsByClassName('pizza');
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');

var spaceTween = TweenMax.to(space, 15, {backgroundPosition: '100% -30%', repeat: -1, repeatDelay: 0, ease: Linear.easeNone});
var nyanTween = TweenMax.to(nyan, 7, {x: 200, y: -100});
var comet1Tween = TweenMax.to(comet1, 1, {x: -1600, y: 400, opacity: 0, repeat: -1, repeatDelay: 2.5, ease: Linear.easeNone});
var comet2Tween = TweenMax.to(comet2, 1, {x: -1300, y: 400, opacity: 1, repeat: -1, delay: 3, repeatDelay: 3});

var tl = new TimelineMax();

var t2 = new TimelineMax();

t2.insert(nyanTween, 0)
  .insert(comet1Tween, 0)
  .insert(comet2Tween, 0);

tl.from(text1, 3, {opacity:0})
  .to(text1, 1, {opacity: 0})
  .from(text2, 3, {opacity: 0})
  .to(text2, 1, {opacity: 0})
  .to(space, 1, {opacity: 1})
  .insert(spaceTween, -1)
  .to(t2, 1);



//TweenMax.to(pizza, 2, {opacity: 0, repeat: -1, yoyo: true, delay: 0});


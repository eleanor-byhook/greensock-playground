'use strict';

var $ = require('jquery');
var comet1 = $('.comet1');
var comet2 = $('.comet2');

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

module.exports = {
  comet1Tween: comet1Tween,
  comet2Tween: comet2Tween
};


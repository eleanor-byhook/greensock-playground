'use strict';

var $ = require('jquery');
var space = $('.background-container');
var background1 = $('#background1');
var background1b = $('#background1b');
var background2 = $('#background2');
var background2b = $('#background2b');
var background3 = $('#background3');
var SPEED = 8;

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
var mediumSpace = TweenMax.to(background2, SPEED * 2, {
  css: {left: left2 - 1976},
  repeatDelay: 0,
  useFrames: false,
  ease: Linear.easeNone,
  repeat: -1
});

//slow
var left3 = background3.position().left;
var slowSpace = TweenMax.to(background3, SPEED * 4, {
  css: {left: left3 - 1976},
  repeatDelay: 0,
  useFrames: false,
  ease: Linear.easeNone,
  repeat: -1
});

module.exports = {
  space: space,
  fastSpace: fastSpace,
  mediumSpace: mediumSpace,
  slowSpace: slowSpace
};


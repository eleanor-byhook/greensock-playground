//jscs:disable maximumLineLength
//jscs:disable disallowMultipleLineBreaks
'use strict';

var config = require('./config');
var $ = require('jquery');
var comets = require('./comets.js');
var text = require('./text.js');
var space = require('./space.js');
var nyan = require('./nyan-cat.js');
var pizza = require('./pizza.js');
var skull = require('./skull.js');
var collisions = require('./collisions.js');
var musicControls = $('.audio');
var score = $('#score');

var SPEED = 8; //Speed of space flight
var BOOST_SPEED = 4;


/* Boost actions */

var boost = function(speed) {
  space.fastSpace.timeScale(speed);
  space.mediumSpace.timeScale(speed);
  space.slowSpace.timeScale(speed);
  pizza.pizzaTween.timeScale(speed);
};

$(document).keydown(function(e) {
  if (e.keyCode === 32) {
    boost(BOOST_SPEED);
    window.cat.frame_24(); //cat head
    window.cat.frame_39(); // cat tail boost
  }
});

$(document).keyup(function(e) {
  if (e.keyCode === 32) {
    window.cat.frame_60(); //reset to default state
    boost(SPEED / 5);
  }
});


/* Instructions and music controls */

var tl2 = new TimelineMax();
tl2.to([score,musicControls], 1, {display: 'inline'})
  .to(text.press_space, 2, {display: 'inline', opacity: 1}, 0)
  .to(text.press_space, 4, {opacity: 0});

/* Flying pizza action */

var tl3 = new TimelineMax();
tl3.insert(pizza.pizzaTween)
  .insert(skull.skullTween);

/* Intro - two text panels, switch to space view, show nyan and comets */

var tl = new TimelineMax();
//.to(text.textContainer, 0.1, {opacity: 0})
tl.to(text.textContainer, 1, {opacity: 1}, 0)
  .from(text.text1, 2, {opacity:0})
  .to(text.text1, 0.5, {opacity: 0})
  .from(text.text2, 3, {opacity: 0})
  .to(text.text2, 0.5, {opacity: 0})
  .to(space.space, 0.1, {opacity: 1})
  .to(nyan.nyan, 0.1, {display: 'inline'})
  .append([comets.comet1Tween, comets.comet2Tween, tl2, tl3])
  .add(collisions.start, 7);


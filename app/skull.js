'use strict';

var $ = require('jquery');
var skull = $('#skull1');

var skullTween = TweenMax.to(skull, 4, {
  display: 'inline',
  x: -1900,
  y: -300,
  repeat: -1,
  ease: Linear.easeNone
});

module.exports = {
  skull: skull,
  skullTween: skullTween
};

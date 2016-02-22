'use strict';

var $ = require('jquery');
var pizza1 = $('#pizza1');

var pizzaTween = TweenMax.to(pizza1, 2, {
    display: 'inline',
    x: -1800,
    y: -85,
    repeat: -1,
    ease: Linear.easeNone
  });

module.exports = {
  pizzaTween: pizzaTween,
  pizza1: pizza1
};



'use strict';

var config = require('./config');

TweenMax.to(".nyan-cat", 5, {x: 500, y: -100});

TweenMax.to(".container", 15, {backgroundPosition: "100% -30%", repeat: -1, repeatDelay: 0, ease: Linear.easeNone});


TweenMax.to(".comet1", 1, {x: -1600, y: 400, opacity: 0, repeat: -1, repeatDelay: 1.5, ease: Linear.easeNone});
TweenMax.to(".comet2", 1, {x: -1300, y: 400, opacity: 1, repeat: -1, delay: 2, repeatDelay: 2});

'use strict';

var $ = require('jquery');
var nyan = $('.nyan-cat');

var mouseX = nyan.offset().left + 600;
var mouseY = nyan.offset().top + 350;

/*suppresses the full nyan-cat animation to only show "default"
 *  mode and not boost mode. */
$(window).load( function () {
  window.cat.parent.frame_227();
});

/* Mouse handling events -  set new location based on mouse hover */

$(document).on('mousemove', function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

var loop = setInterval(function () {
  var newX = nyan.offset().left - 130; //centers mouse to middl e of pop-tart
  var newY = nyan.offset().top - 30;
  newX += (mouseX - newX) / 3;
  newY += (mouseY - newY) / 3;
  nyan.css({left: newX, top: newY});
}, 30);

module.exports = {
  nyan: nyan
};


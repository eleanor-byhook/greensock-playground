'use strict'

//var $ = require('jquery');
var pizza = $('#pizza1');
var nyan = $('.nyan-cat');

var collided = [];

$(window).load( function() {
  window.setInterval(function() {
    var collided = $('.nyan-cat').collision('#pizza1');
    if(collided.length){
    console.log("HEY: " + collided);
    }
  }, 100);
});






"use strict";

var $ = require("dom");
var Input = require("app.input");


exports.start = function() {
  var input = new Input();
  $.add( document.body, input );
};

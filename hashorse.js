/* ========================================================================
 * Hashorse 0.1.0
 * http://rhinerock.com
 * ========================================================================
 * Copyright 2015 Philipp S. Nueesch
 * Licensed under MIT
 * ======================================================================== */

var hashorse = (function($) {

  "use strict";

  var exports = {};

  var error = {
    stack: [],
    has: function() {
      if(this.stack.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    print: function() {
      if(this.has() === false) {
        for(var i = 0; i < this.stack.length; i++) {
          console.log(this.stack[i]);
        }
      } else {
        console.log("no errors present");
      }
    }
  };

  // EVENTS
  // ======================

  $("#inputForm").on("submit", getInput);

  // HELPERS
  // ======================

  function init() {
    $("#inputMain").focus();
    error.print();
  }

  function getInput(evt) {

    evt.preventDefault();

    var $inputField = $("#inputMain");

    var inputText = $inputField.val();
    $inputField.val("");

    inputText = inputText.trim();

    if(!inputText.length < 1) {
      parse(inputText);
      return inputText;
    } else {
      error.stack.push("ERR1: no input");
      error.print();
      return false;
    }

  }

  function renderOutput(text) {
    var $outputMain = $("#outputMain");
    var htmlString = "<p>";
    htmlString += text;
    htmlString += "</p>";

    $outputMain.append(htmlString);
  }

  function parse(inputText) {

    
    
    renderOutput(inputText);
  }



  // Intitalization
  init();

  // EXPORTS
  // ======================

  return exports;

}(jQuery));
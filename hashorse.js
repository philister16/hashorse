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

  // EVENTS
  // ======================

  $("#inputForm").on("submit", action);

  // HELPERS
  // ======================

  function init() {
    $("#inputMain").focus();
  }

  function action(evt) {
    evt.preventDefault();
    var inputText = getInput();
    var procArray = makeArray(inputText);
    var outputString = makeNewString(procArray);
    renderOutput(outputString);
  }


  /**
   * Gets the string from the user and converts it into processing array
   * @param {evt} jQuery evt object
   * @return {arr} processing array
   */
  function getInput() {

    var $inputField = $("#inputMain");

    var inputText = $inputField.val();
    $inputField.val("");

    inputText = inputText.trim();

    if(!inputText.length < 1) {
      return inputText;
    } else {
      return false;
    }

  } // getInput()


  function renderOutput(text) {
    var $outputMain = $("#outputMain");
    var htmlString = "<p>";
    htmlString += text;
    htmlString += "</p>";

    $outputMain.append(htmlString);
  }

  /**
   * analyses the userInput against the tag identifier and returns an array of tags
   * @param {arr} user input
   * @return {arr} tags
   */
  function getTags(userInput) {

    var tags = [];

    for(var i = 0; i < userInput.length; i++) {

      switch(userInput[i][0]) {

        case "#":
          tags.push(userInput[i]);
        break;

        default:

        break;

      }

    }

    return tags;
  } // getTags()


  /**
   * Converts the input string to an array
   * @param {str} the inputText
   * @return {arr} array with sliced string
   */
  function makeArray(inputText) {

    var userInput = inputText.split(" ");

    return userInput;
  } //makeArray()


  /**
   * Converts the processing array back into a string including additional markup
   * @param {arr} the processing array
   * @return {str} string for display to user
   */
  function makeNewString(userInput) {

    var newString = [];

    for(var i = 0; i < userInput.length; i++) {

      switch(userInput[i][0]) {

        case "#":
          newString.push("<a href='#'>" + userInput[i] + "</a>");
        break;

        default:
          newString.push(userInput[i]);
        break;

      }

    }

    newString = newString.join(" ");

    return newString;
  } // makeNewString()




  // Intitalization
  init();

  // EXPORTS
  // ======================

  return exports;

}(jQuery));
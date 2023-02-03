// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

  });

// Displays current day on header
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

//Getting the save button to save user input to local storage for each hour
for (let index = 9; index < 18; index++) {
    var saveButton = $("#hour-" + index).find('button').first().click(function(){
        var userInput = $("#hour-" + index).find('textarea').first().val();
        localStorage.setItem("userInput" + index, userInput);
    });
}

//Display local storage data for each hour on that hour
window.onload = function() {
    for (let index = 9; index < 18; index++) {
        var storedInput = localStorage.getItem("userInput" + index);
        $("#hour-" + index).find('textarea').first().val(storedInput);
    }
}
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

//Loads local storage data to each hour of the day
window.onload = function() {
    for (let index = 9; index < 18; index++) {
        var storedInput = localStorage.getItem("userInput" + index);
        $("#hour-" + index).find('textarea').first().val(storedInput);
    }
}

//Current hour of the day
var currentTime = dayjs().hour();

//Changes class based on time of day
for (let index = 9; index < 18; index++) {
    if (currentTime > index) {
        $("#hour-" + index).removeClass('future');
        $("#hour-" + index).removeClass('present');
        $("#hour-" + index).addClass('past');
    }
    else if (currentTime === index) {
        $("#hour-" + index).removeClass('future');
        $("#hour-" + index).removeClass('past');
        $("#hour-" + index).addClass('present');
    }
    else {
        $("#hour-" + index).removeClass('past');
        $("#hour-" + index).removeClass('present');
        $("#hour-" + index).addClass('future');
    }
}
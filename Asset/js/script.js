var currentDay = document.querySelector("#currentDay")

// Displays current date
function displayTime() {
    var time = moment().format("dddd MMMM Do YYYY");    
    currentDay.append(time);
  }

  displayTime();
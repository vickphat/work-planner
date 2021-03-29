// Displays current date
var time = moment().format("dddd MMMM Do YYYY");
$("#currentDay").append(time);
console.log(time)

// saveBtn click listener 
$(".saveBtn").click(function () {

// Get nearby values of the description in JQuery
var text = $(this).siblings(".description").val();
var timeBlock = $(this).parent().attr("id");
console.log(this, text, timeBlock)

// Saves text input and time block into local storage
localStorage.setItem(timeBlock, text);

})



// Displays current date
var currentDate = moment().format("dddd MMMM Do YYYY");
$("#currentDay").append(currentDate);
console.log(currentDate)

// Save button
$(".saveBtn").click(function () {

    var text = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    // console logs inputted text and timeblock
    console.log(this, text, timeBlock)

    // Saves text input and time block into local storage
    localStorage.setItem(timeBlock, text);
})

// On page refresh, text input stored in local storage will persist 
$("#block1 .description").val(localStorage.getItem("block1"));
$("#block2 .description").val(localStorage.getItem("block2"));
$("#block3 .description").val(localStorage.getItem("block3"));
$("#block4 .description").val(localStorage.getItem("block4"));
$("#block5 .description").val(localStorage.getItem("block5"));
$("#block6 .description").val(localStorage.getItem("block6"));
$("#block7 .description").val(localStorage.getItem("block7"));
$("#block8 .description").val(localStorage.getItem("block8"));
$("#block9 .description").val(localStorage.getItem("block9"));
$("#block10 .description").val(localStorage.getItem("block10"));


function colorCode() {
    //  gets the current time
    var currentTime = moment().hours();

    // function to loop though time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("block")[1]);

        // adds appropiate class depending on the time
        //   textarea grey
        if (blockTime < currentTime) {
            $(this).addClass("past");
        }
        //   textarea red
        else if (blockTime === currentTime) {
            $(this).addClass("present");
        }
        //   textarea green
        else {
            $(this).addClass("future");

        }
    })
}
colorCode();



$(document).ready(function () {
    
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();
        
        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            
            //  checks the time and add/remove the class
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeNow === blockTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
                
            }

        })
        
        // saveBtn click listener 
        $(".saveBtn").on("click", function () {
            // Get nearby values of the Schedule in JQuery
            var text = $(this).siblings(".Schedule").val();
            var time = $(this).parent().attr("id");
    
            // Save text in local storage
            localStorage.setItem(time, text);
        })
    }

    // Get item from local storage if any
    $("#7 .Schedule").val(localStorage.getItem("7"));
    $("#8 .Schedule").val(localStorage.getItem("8"));
    $("#9 .Schedule").val(localStorage.getItem("9"));
    $("#10.Schedule").val(localStorage.getItem("10"));
    $("#11 .Schedule").val(localStorage.getItem("11"));
    $("#12 .Schedule").val(localStorage.getItem("12"));
    $("#13 .Schedule").val(localStorage.getItem("13"));
    $("#14 .Schedule").val(localStorage.getItem("14"));
    $("#15 .Schedule").val(localStorage.getItem("15"));
    $("#19 .Schedule").val(localStorage.getItem("19"));

    timeTracker();
})

// today's day and date
var todayDate = moment().format("MMM Do YY");  
$("#currentDay").html(todayDate);
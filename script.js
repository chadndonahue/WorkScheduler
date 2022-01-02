$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        console.log(value, time);
        localStorage.setItem(time, value);
    });

    function checkHour() {
        var currentHour = moment().hours();

        $('.time-block').each(function(){
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);
            if(hourBlock < currentHour) {
                $(this).addClass("past")
            } else if(hourBlock === currentHour) {
                $(this).removeClass('past');
                $(this).addClass("present");
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass("future");
            }
        })
    }

    checkHour();
    var interval = setInterval(checkHour, 15000);
    $("#currentDay").text(moment().format('dddd, MMM Do'));

    $("#hour-9 .description").val(localStorage.getItem("hour-09"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
}) 
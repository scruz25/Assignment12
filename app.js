$(document).ready(function(){
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=b6afbbef4236d3e2b59d2f1188afb274",
    type: "GET",
    dataType: "JSON",
    success: function(data) {
            // print all of the JSON to the console
            console.log(data);
             console.log(data.list[0].main.temp);
             console.log(data.list[1].main.temp);
             console.log(data.list[2].main.temp);

            $("#1").html("The temp is: " + data.list[0].main.temp);
            $("#2").html("The temp is: " + data.list[1].main.temp);
            $("#3").html("The temp is: " + data.list[2].main.temp);
        },
        error: function(data, textStatus, errorThrown) {
            console.log("whomp, whomp");
            // Do something to handle the error
            console.log(errorThrown);
        }

    })

    $('.toggle2').click(function(){
        $('.moscow').toggle();
    });

    $('.toggle1').click(function(){
        $('.london').toggle();
    });

    $('.toggle3').click(function(){
        $('.kiev').toggle();
    });


})




// --------- VARIABLES ---------- //
// var apiKey = "e06e90d8fc4837e944f6dcccda5f3e8a";
//     var citySearch = $("#search-input").val().trim();
//     var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=" + apiKey;


$("#search-form").on("submit", function (event) {
    event.preventDefault();

    var citySearch = $("#search-input").val().trim();
    //getWeather(citySearch);
    
    if (citySearch === "") {
        return;
    }
    
    var apiKey = "e06e90d8fc4837e944f6dcccda5f3e8a";
    var citySearch = $("#search-input").val().trim();
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (data) {
        console.log(data);

    
    $("#city-name").text(data.name + " Weather");

    $("#temp").text(data.main.temp + "°");
    $("#wind").text(data.wind.speed + " mph");
    $("#humidity").text(data.main.humidity + " %");

    $("#search-input").val("");

});

})
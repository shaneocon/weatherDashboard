// --------- VARIABLES ---------- //
var apiKey = "e06e90d8fc4837e944f6dcccda5f3e8a";
var city = $("#search-input").val().trim();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;


$("#search-form").submit(function(event) {
    event.preventDefault();

    var cityName = $("#search-input").val();
    getWeather(cityName);
})

function getWeather(city){
    $.ajax({
        url: queryURL,
        method: "GET",
}).then(function (data) {
    console.log(data);
});







}
// --------- VARIABLES ---------- //
// var apiKey = "e06e90d8fc4837e944f6dcccda5f3e8a";
//     var citySearch = $("#search-input").val().trim();
//     var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=" + apiKey;


// Wait for elements to finish loading by placing code in $(function(){})
$(function () {
    // Replace API_KEY with your api key for OpenWeatherAPI
    var apiKey = "c5b501b47a94dbd44148a427c20e831f";
    $(document).on("click", ".city", function () {
      // get the name of the city using the data-city attribute of the clicked
      // element
      var city = $(this).attr("data-city");
      // construct a url to search OpenWeatherAPI for the current weather in the
      // city
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;
      // send ajax request for current weather to OpenWeatherAPI
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        // log the data from the api to the console
        console.log(data);
        // set the text of the #city-name h2 element using the city name in the
        // response
        $("#city-name").text(data.name + " Weather");
        // display the temperature, wind, and humidity in the elements found in
        // the html. (set the text)
        $("#temp").text(data.main.temp + "°");
        $("#wind").text(data.wind.speed + " mph");
        $("#humidity").text(data.main.humidity + " %");
      });
    });
   
    $("#search-form").on("submit", function (event) {
      
      event.preventDefault();
      
      var search = $("#search-input").val().trim();
      
      if (search === "") {
        return;
      }
      
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&units=imperial&appid=" +
        apiKey;
      
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        
        console.log(data);
        
        $("#city-name").text(data.name + " Weather");
        
        $("#temp").text(data.main.temp + "°");
        $("#wind").text(data.wind.speed + " mph");
        $("#humidity").text(data.main.humidity + " %");
        
        $("#search-input").val("");
        
      });
    });
  });


























































// (function () {
//     var apiKey = "c5b501b47a94dbd44148a427c20e831f";
//     $(document).on("click", ".city", function() {

//         var city = $(this).attr("data-city");
//         var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +citySearch+ "&units=imperial&appid=" +apiKey;

//         $.ajax({
//             url: queryUrl,
//             method: "GET",
//         }).then(function (data) {
//             console.log(data);

//             $("#city-name").text(data.name + " Weather");

//             $("#temp").text(data.main.temp + "°");
//             $("#wind").text(data.wind.speed + " mph");
//             $("#humidity").text(data.main.humidity + " %");

//             $("#search-input").val("");
//         });

//     });

//     $("#search-form").on("submit", function (event) {
//         event.preventDefault();

//         var citySearch = $("#search-input").val().trim();
//         //getWeather(citySearch);
        
//         if (citySearch === "") {
//             return;
//         }
        
        
//         var citySearch = $("#search-input").val().trim();
        
//         $.ajax({
//             url: queryURL,
//             method: "GET",
//         }).then(function (data) {
//             console.log(data);

        
//             $("#city-name").text(data.name + " Weather");

//             $("#temp").text(data.main.temp + "°");
//             $("#wind").text(data.wind.speed + " mph");
//             $("#humidity").text(data.main.humidity + " %");

//             $("#search-input").val("");

// });

// })
// })
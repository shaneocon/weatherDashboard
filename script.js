// --------- VARIABLES ---------- //
// var apiKey = "e06e90d8fc4837e944f6dcccda5f3e8a";
//     var citySearch = $("#search-input").val().trim();
//     var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=" + apiKey;



$(function () {
    
    var apiKey = "e06e90d8fc4837e944f6dcccda5f3e8a";
    $(document).on("click", ".city", function () {
      
      var city = $(this).attr("data-city");
      
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;
      
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
       
        console.log(data);
        
        $("#city-name").text(data.name + " Weather");
        $("#icon").html("<img src='http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $("#description").text(data.weather[0].description);
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
        var dayOne = moment().format("M/D/YYYY");
        var dayOneIcon = data.list[0].weather[0].icon;
        var dayOneImg = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + dayOneIcon + ".png");
        var dayOneTemp = data.main.temp + " °F";
        var dayOneHumid = data.main.humidity + "%";

        // DISPLAY DAY ONE

        var dayOneDateEl = $("<p>").text(dayOne);
        var dayOneImgEl = $("<p>").text(dayOneIcon);
        var dayOneTempEl = $("<p>").text("Temp: " + dayOneTemp);
        var dayOneHumidEl = $("<p>").text("Humdity: " + dayOneHumid);

            $(".dayOne").append(dayOneDateEl);
            $(".dayOne").append(dayOneImgEl);
            $(".dayOne").append(dayOneTempEl);
            $(".dayOne").append(dayOneHumidEl);
            



       


    })
  })
})
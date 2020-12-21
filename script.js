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
        $("#weather-icon").html("<img src='http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
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
        $("#weather-icon").html("<img src='http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $("#description").text(data.weather[0].description);
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
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        search +
        "&units=imperial&appid=" +
        apiKey;
      
        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function (data) {
        
        console.log(data);
         // --------- DISPLAY DAY ONE ------------- //

        var dayOne = moment().format("M/D/YYYY");
        // var dayOneIcon = data.weather[0].icon;
        //var dayOneImg = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + dayOneIcon + ".png");
        var dayOneTemp = data.list[0].main.temp + " °F";
        var dayOneHumid = data.list[0].main.humidity + "%";

        var dayOneDateEl = $("<p>").text(dayOne);
        // var dayOneImgEl = $("<p>").html(dayOneIcon);
        var dayOneTempEl = $("<p>").text("Temp: " + dayOneTemp);
        var dayOneHumidEl = $("<p>").text("Humdity: " + dayOneHumid);

            $(".dayOne").append(dayOneDateEl);
            // $(".dayOne").append(dayOneImgEl);
            $(".dayOne").append(dayOneTempEl);
            $(".dayOne").append(dayOneHumidEl);

         // --------- DISPLAY DAY TWO ------------- //

        var dayTwo = moment().add(1, "days").format("M/D/YYYY");
        // var dayTwoIcon = data[8].weather[0].icon;
        //var dayTwoImg = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + dayTwoIcon + ".png");
        var dayTwoTemp = data.list[8].main.temp + " °F";
        var dayTwoHumid = data.list[8].main.humidity + "%";

        var dayTwoDateEl = $("<p>").text(dayTwo);
        // var dayTwoImgEl = $("<p>").text(dayTwoIcon);
        var dayTwoTempEl = $("<p>").text("Temp: " + dayTwoTemp);
        var dayTwoHumidEl = $("<p>").text("Humdity: " + dayTwoHumid);

            $(".dayTwo").append(dayTwoDateEl);
            // $(".dayTwo").append(dayTwoImgEl);
            $(".dayTwo").append(dayTwoTempEl);
            $(".dayTwo").append(dayTwoHumidEl);

        // --------- DISPLAY DAY THREE ------------- //

        var dayThree = moment().add(2, "days").format("M/D/YYYY");
        // var dayThreeIcon = data.list[16].weather[0].icon;
        // var dayThreeImg = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + dayThreeIcon + ".png");
        var dayThreeTemp = data.list[16].main.temp + " °F";
        var dayThreeHumid = data.list[16].main.humidity + "%";

        var dayThreeDateEl = $("<p>").text(dayThree);
        // var dayThreeImgEl = $("<p>").text(dayOneIcon);
        var dayThreeTempEl = $("<p>").text("Temp: " + dayThreeTemp);
        var dayThreeHumidEl = $("<p>").text("Humdity: " + dayThreeHumid);

            $(".dayThree").append(dayThreeDateEl);
            // $(".dayThree").append(dayThreeImgEl);
            $(".dayThree").append(dayThreeTempEl);
            $(".dayThree").append(dayThreeHumidEl);

        // --------- DISPLAY DAY FOUR ------------- //

        var dayFour = moment().add(3, "days").format("M/D/YYYY");
        // var dayFourIcon = data.list[24].weather[0].icon;
        // var dayFoudImg = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + dayFourIcon + ".png");
        var dayFourTemp = data.list[24].main.temp + " °F";
        var dayFourHumid = data.list[24].main.humidity + "%";

        var dayFourDateEl = $("<p>").text(dayFour);
        // var dayFourImgEl = $("<p>").text(dayOneIcon);
        var dayFourTempEl = $("<p>").text("Temp: " + dayFourTemp);
        var dayFourHumidEl = $("<p>").text("Humdity: " + dayFourHumid);

            $(".dayFour").append(dayFourDateEl);
           //  $(".dayFour").append(dayFourImgEl);
            $(".dayFour").append(dayFourTempEl);
            $(".dayFour").append(dayFourHumidEl);

        // --------- DISPLAY DAY FIVE ------------- //

        var dayFive = moment().add(4, "days").format("M/D/YYYY");
        // var dayFiveIcon = data.list[32].weather[0].icon;
        // var dayFiveImg = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + dayFiveIcon + ".png");
        var dayFiveTemp = data.list[32].main.temp + " °F";
        var dayFiveHumid = data.list[32].main.humidity + "%";

        var dayFiveDateEl = $("<p>").text(dayFive);
        // var dayFiveImgEl = $("<p>").text(dayFiveIcon);
        var dayFiveTempEl = $("<p>").text("Temp: " + dayFiveTemp);
        var dayFiveHumidEl = $("<p>").text("Humdity: " + dayFiveHumid);

            $(".dayFive").append(dayFiveDateEl);
            // $(".dayFive").append(dayFiveImgEl);
            $(".dayFive").append(dayFiveTempEl);
            $(".dayFive").append(dayFiveHumidEl);

        
            



       


    })
  })
})
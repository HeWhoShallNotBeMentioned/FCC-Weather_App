$(document).ready(function() {

  var lat = 0;
  var long = 0;
  var weathObj =[];

   if (navigator.geolocation) {  navigator.geolocation.getCurrentPosition(function(position) {
   lat = position.coords.latitude ;      long = position.coords.longitude;


       $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long, function(json) {
         var temp =  json.main.temp;


        document.getElementById("weather").innerHTML =
          '<div class="weatherLine">' + json.name + '</div>' +
          "<div class='weatherLine'> Description: " + json.weather[0].description + "</div>  " + "<img src='" +
          json.weather[0].icon + "'>" + "<div class='weatherLine'> Temp: " + "<span class='fahrenheit'>" +
          json.main.temp + "° C" + "</span>" + "</div>";

           $('span').on('click', function(json){
             $('span').toggleClass('celcius');
             $('span').toggleClass('fahrenheit');


              if ($(this).hasClass('celcius')) {
                $('span').text(setFahrenheit());
                return;
              } else {
                $('span').text(setCelcius());
              }


            });

              function setCelcius(){
                var cel = temp;
                return cel + "° C";
              }

              function setFahrenheit(){
                var cel = temp;
                cel = cel*9/5 + 32;
                return cel + "° F";
              }
      });
    });
  }
});

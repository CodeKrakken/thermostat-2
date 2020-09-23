require('dotenv').config()

$(document).ready(function() {
  
  var thermostat = new Thermostat();
//   if ("geolocation" in navigator) {
//     displayWeather('London')
//     console.log(getCurrentPosition);
//   } else {
//     displayWeather('London');
//   }
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function updateCity(city) {
    $('#city').text(city);
  }

  function updateCityTemperature(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token = '&appid=625aa21afc49ef' + '8fd3e56f982d1512f4';
    var units = '&units=metric';
    $.get(url + city + token + units, function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  }

  function displayWeather(city) {
    updateCityTemperature(city);
    updateCity(city);
  }

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersave-toggle').click(function() {
    thermostat.togglePowerSavingMode();
    $('#power-saving-status').text(thermostat.isPowerSavingModeOn() ? "ON" : "OFF");
    updateTemperature();
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    displayWeather($('#new-city').val());      
  })
})
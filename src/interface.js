$(document).ready(function() {
  
  var thermostat = new Thermostat();
  var city = "London";
  updateWeather();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function updateCity() {
    $('#city').text(city);
  }

  function updateCityTemperature() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=625aa21afc49ef8fd3e56f982d1512f4&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  }

  function updateWeather() {
    updateCityTemperature();
    updateCity();
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
    city = $('#new-city').val(); 
    updateWeather();      
  })
})
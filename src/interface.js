$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }
  updateTemperature();

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
})
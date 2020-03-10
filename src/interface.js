$(document).ready(function() {
  var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);

  $('#temperature-up').click(function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature);
  });

  $('#powersave-toggle').click(function() {
    thermostat.togglePowerSavingMode();
    $('#power-saving-status').text(thermostat.isPowerSavingModeOn() ? "ON" : "OFF");
    $('#temperature').text(thermostat.temperature);
  })
})
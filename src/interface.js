$(document).ready(function() {
  var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);

  $('#temperature-up').click(function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

})
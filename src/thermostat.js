'use strict';

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(degrees) {
  this.temperature += degrees ;
}

Thermostat.prototype.down = function(degrees) {
  this.temperature -= (Math.abs(degrees));
}
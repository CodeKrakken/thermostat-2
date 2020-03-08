'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.MAXIMUM_TEMPERATURE_PSM = 25;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  } 
  this.temperature ++ ;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
   return;
  }
  this.temperature -- ;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemperature = function() {
  return (this.isPowerSavingModeOn() ? 
  (this.temperature === this.MAXIMUM_TEMPERATURE_PSM) : 
  (this.temperature === this.MAXIMUM_TEMPERATURE));
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
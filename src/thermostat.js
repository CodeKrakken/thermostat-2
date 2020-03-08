'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.MAXIMUM_TEMPERATURE_PSM = 25;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.LOW_USAGE_LIMIT = 18;
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

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  return 'low-usage';
}
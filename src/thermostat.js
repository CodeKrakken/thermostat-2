'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.MAXIMUM_TEMPERATURE_PSM = 25;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.LOW_USAGE_LIMIT = 18;
  this.HIGH_USAGE_LIMIT = 25;
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

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this.temperature > this.HIGH_USAGE_LIMIT) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  };
}
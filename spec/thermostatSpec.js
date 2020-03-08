'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature', function() {
    thermostat.up(1);
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature', function() {
    thermostat.down(1);
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('adjusts for input of minus numbers for decrease', function() {
    thermostat.down(-1);
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
});

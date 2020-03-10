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
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 11; i ++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can be reset to default temperature', function() {
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('can switch power saving mode off', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
  });

  describe('when power saving mode is off', function() {

    beforeEach(function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('has a maximum temperature of 32 degrees', function() {
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

    it('can switch power saving mode on', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('reduces the temperature to 25 if power saving mode is activated', function() {
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toBe(32);
      thermostat.togglePowerSavingMode();
      expect(thermostat.temperature).toBe(25);
    })
  });

  describe('displaying usage levels', function() {
    it('17 degrees is considered low usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('20 degrees is considered medium usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('26 degrees is considered high usage', function() {
      thermostat.togglePowerSavingMode();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});

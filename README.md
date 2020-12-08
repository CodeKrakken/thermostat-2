# Thermostat-2

Second version of Makers [group project](http://github.com/CodeKrakken/thermostat), built solo this time.

## Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
* Low usage is indicated with green, medium-usage indicated with black, high-usage indicated with red.
* Backend written in vanilla JavaScript
* Dynamic interface powered by jQuery
* Makes API call to obtain weather information
* Built by Test Driven Development with Jasmine

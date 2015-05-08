var Thermostat = function() {
  this.temperature = 20;
  this.isPowerSaving = true;
  this.powerSavingOnLimit = 25;
  this.powerSavingOffLimit = 32;
  this.minimumTemp = 10;
  this.defaultTempChange = 1;
  this.defaultTemp = this.temperature;
};

Thermostat.prototype.increase = function(number) {
  number = number || this.defaultTempChange;
  this.temperature += number;

if (this.isPowerSaving)
  if (this.temperature > this.powerSavingOnLimit)
    this.temperature = this.powerSavingOnLimit;

if (this.temperature > this.powerSavingOffLimit)
  this.temperature = this.powerSavingOffLimit;

};

Thermostat.prototype.decrease = function(number) {
  number = number || this.defaultTempChange;
  this.temperature -= number;
  if (this.temperature < this.minimumTemp)
    this.temperature = this.minimumTemp;
};

Thermostat.prototype.switchPowerSaving = function() {
  this.isPowerSaving = !this.isPowerSaving;
  if (this.isPowerSaving)
    if (this.temperature > this.powerSavingOnLimit)
      this.temperature = this.powerSavingOnLimit;
};

Thermostat.prototype.resetButton = function() {
  this.temperature = this.defaultTemp;
};

Thermostat.prototype.energyRating = function() {
  if (this.temperature < 18) {
    return 'green';
  }

  if (this.temperature < 25) {
    return 'orange';
  }

  if (this.temperature > 24) {
    return 'red';
  }

};

module.exports = Thermostat

describe ("Thermostat", function() {

  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it ("should have a temperature of 20 degrees to start", function() {
    expect(thermo.temperature).toEqual (20);
  });

  it ("should be able to have it's temperature increased", function() {
    thermo.increase();
    expect(thermo.temperature).toEqual (21);
  });

  it ("should be able to have it's temperature decreased", function() {
    thermo.decrease();
    expect(thermo.temperature).toEqual (19);
  });

  it ("should be able to decrease temperature by a specific number of degrees", function() {
    thermo.decrease(10);
    expect(thermo.temperature).toEqual (10);
  });

  it("should have a minimum temperature of 10", function() {
    thermo.decrease(11);
    expect(thermo.temperature).toEqual (10);
  });

  it("should start with power saving mode on", function() {
    expect(thermo.isPowerSaving).toBe (true);
  });

  it("should be able to turn power saving mode off", function() {
    thermo.switchPowerSaving();
    expect(thermo.isPowerSaving).toBe (false);
  });

   it("should be able to turn power saving mode on", function() {
    thermo.switchPowerSaving();
    thermo.switchPowerSaving();
    expect(thermo.isPowerSaving).toBe (true);
  });

   it("should set a maximum temperature of 25 degrees for powersaving", function() {
    thermo.increase(6);
    expect(thermo.temperature).toEqual (25);
  });

   it("should set a maximum temperature of 32 degrees when powersaving is off", function() {
    thermo.switchPowerSaving();
    thermo.increase(13);
    expect(thermo.temperature).toEqual (32);
   });

   it("should set the temperature to 20 when reset", function() {
    thermo.increase();
    thermo.resetButton();
    expect(thermo.temperature).toEqual (20);
   });

   it("should set the temperature to 25 when power saving is switched on if it is above 25", function(){
    thermo.switchPowerSaving();
    thermo.increase(26);
    thermo.switchPowerSaving();
    expect(thermo.temperature).toEqual (25);
   });

});

var thermo = new Thermostat();

$(document).ready(function() {

  $('#temperature').text(thermo.temperature);
  $('#temperature').css('color', thermo.energyRating());

  $('.increaseTemperature').click( function() {
    thermo.increase();
    $('#temperature').text(thermo.temperature);
    $('#temperature').css('color', thermo.energyRating());
  });

  $('.decreaseTemperature').click( function() {
    thermo.decrease();
    $('#temperature').text(thermo.temperature);
    $('#temperature').css('color', thermo.energyRating());
  });

  $('.reset').click( function() {
    thermo.resetButton();
    $('#temperature').text(thermo.temperature);
    $('#temperature').css('color', thermo.energyRating());
  });

  $('.powerSave').click( function() {
    thermo.switchPowerSaving();
    $('#power').text(thermo.isPowerSaving);
    $('#temperature').text(thermo.temperature);
  });

});

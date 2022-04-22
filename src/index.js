import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './js/exchange.js';

function getRate(response) {
  let country = $('#country').val();
  if (country === "USD") {
    let USDAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.USD);
    $('.showMoney').html(` $${USDAmount} `);
  }  else if (country === "AED") {
    let AEDAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.AED);
    $('.showMoney').html(` ${AEDAmount} dirhams.`);
  }  else if (country === "AUD") {
    let AUDAmount =Math.round($('#dollarAmount').val() * response.conversion_rates.AUD);
    $('.showMoney').html(` ${AUDAmount} Australian dollars.`);
  }  else if (country === "EUR") {
    let EURAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.EUR);
    $('.showMoney').html(` ${EURAmount} euros.`);
  }  else if (country === "MXN") {
    let MXNAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.MXN);
    $('.showMoney').html(` ${MXNAmount} pesos.`);
  }  else {
    $('.showErrors').text(`${response.message}`);
  }
}

$(document).ready(function() {
  $('#exchangeMoney').click(function() {
    Exchange.convertMoney()
      .then(function(response) {
        getRate(response);
      })
      .catch(function() {
        ('.showErrors').text('Error');
      });
  });
});
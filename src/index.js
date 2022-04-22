import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange.js';

function getRate(response) {
  let country = $('#country').val();
  if (country === "USD") {
    let USDAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.USD);
    $('.showMoney').html(` $${USDAmount} `);
  }
}
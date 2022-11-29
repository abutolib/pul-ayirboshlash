
var elForm = document.querySelector('.js-form');
var elMoney = document.querySelector(".js-input");
var elSelect = document.querySelector('.js-select');
var elResult = document.querySelector('.js-result');

var DOLLAR_TO_SUM = 11225;
var EURO_TO_SUM = 11686;
var RUBL_TO_SUM = 185;

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  var elUserMoney = elMoney.value;
  var elUserDollar = elMoney.value / DOLLAR_TO_SUM;
  var elUserEuro = elMoney.value / EURO_TO_SUM;
  var elUserRubl = elMoney.value / RUBL_TO_SUM;

  if (elSelect.value == '1') {
    elResult.textContent = `${elUserMoney} sum = $ ${elUserDollar.toFixed(4)}`;
  }else if(elSelect.value == '2') {
    elResult.textContent = `${elUserMoney} sum = ₽ ${elUserRubl.toFixed(4)}`;
  }else if (elSelect.value == '3') {
    elResult.textContent = `${elUserMoney} sum = € ${elUserEuro.toFixed(4)}`;
  }else{
    elResult.textContent = `Iltimos biron bir valyutani tanlang`;
  }

})



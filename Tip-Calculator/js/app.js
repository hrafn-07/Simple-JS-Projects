let amount = document.querySelector('#amount');
let payers = document.querySelector('#payer');
let tips = document.querySelector('#tips');
let calculate = document.querySelector('#calculate');
let res = document.querySelector('.result-box');
let resTypes = res.querySelectorAll('h2');
let modal = document.getElementById("myModal");
let closeModal = document.querySelector('.close');


calculate.addEventListener('click', event => {
  let modInner = document.querySelector('.modal-vals').getElementsByTagName('h3');
  console.log('Amount : ' + amount.value);
  console.log('Payers :' + payers.value);
  console.log('Tips   :' + tips.value);
  console.log(modInner[1].innerHTML);
  
  if (amount.value == null || amount.value == '') {
    modInner[0].innerHTML = 'Please Enter How Much Bill Amount?'
  }
  if (payers.value == '' || payers.value == '') {
    modInner[1].innerHTML = 'Please Enter How Payers?'
  }
  if (tips.value == 0) {
    modInner[2].innerHTML = 'Please Enter How Was Your Service?'
  }
  if (amount.value != '' && payers.value != '' && tips.value != 0) {
    var tipPercent = tips.options[tips.selectedIndex].value;
    var tipAmount = parseInt(amount.value) * tipPercent / 100;
    var payeach = (parseInt(amount.value) + parseFloat(tipAmount)) / payers.value;

    resTypes[0].innerHTML = "Tip + Amount : $" + (parseFloat(amount.value) + parseFloat(tipAmount));
    resTypes[1].innerHTML = "Tip : $" + tipAmount.toFixed(2);
    resTypes[2].innerHTML = "Payer Each : $" + payeach.toFixed(2);
    timerControl(res,5);
  } else {
    timerControl(modal,3);
  }
});

/** Modal close icon event listener **/
closeModal.addEventListener('click',e =>{
  modal.style.display = 'none';
});

/*** A timer for display items ******/
function timerControl(query,timer) {
  query.style.display = "block";
  setTimeout(function () {
    query.style.display = "none";
  }, timer*1000);
}
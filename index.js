const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-username");

const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardVcv = document.getElementById("card-cvc");

const holderName = document.getElementById("holder-name");
const holderCardNumber = document.getElementById("holder-card-number");
const expDate = document.getElementById("exp-date");
const mmYy = document.getElementById("mm-yy");
const cvc = document.getElementById("cvc");

holderName.addEventListener("change", () => {
  let name = holderName.value;
  if (name == "") {
    console.log(name);
    holderName.classList.add("card-cvc");
  } else {
    cardName.textContent = name;
  }
});

holderCardNumber.addEventListener("change", () => {
  cardNumber.textContent = holderCardNumber.value;
});

expDate.addEventListener("change", () => {
  cardMonth.textContent = expDate.value;
});

mmYy.addEventListener("change", () => {
  cardYear.textContent = mmYy.value;
});

cvc.addEventListener("change", () => {
  cardVcv.textContent = cvc.value;
});


// Add check for input elements after pressing the submit button
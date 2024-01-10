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

const confirmBtn = document.getElementById("confirm-btn");

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

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const formFields = {
    "holder-name": { element: holderName, errorMessage: "" },
    "holder-card-number": { element: holderCardNumber, errorMessage: "" },
    "exp-date": { element: expDate, errorMessage: "" },
    "mm-yy": { element: mmYy, errorMessage: "" },
    cvc: { element: cvc, errorMessage: "" },
  };

  let allFieldsValid = true;

  for (const fieldName in formFields) {
    console.log(fieldName.element);
    const field = formFields[fieldName];
    const errorElement = document.getElementById(`${fieldName}-error`);
    console.log(field.element.value);

    // check if inputs are empty
    if (!field.element.value) {
      allFieldsValid = false;
      errorElement.textContent = "Can't be blank";
      errorElement.classList.add("error-msg");
    } else {
      errorElement.textContent = "";
      errorElement.classList.remove("error-msg");
    }
  }

  if (allFieldsValid) {
    document.getElementById("form-elements").style.display = "none";
    document.getElementById("success-container").style.display = "block";
  }
});

// getting text out of input

const button = document.querySelector(".button");

const form = document.forms.myForm;
const input = form.elements.myInput;
const textArea = form.elements.myTextArea;

// by clicking on the button
// log the values of the text fields to the console
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(input.value); // the value of input
  console.log(textArea.value); // the value of textArea
});



// getting a boolean as output
const button = document.querySelector(".button");

const checkbox = document.forms.myForm.myCheckbox;

// by clicking on the button
// log the value of the checked property belonging to checkbox to the console
button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(checkbox.checked); // true or false
}); 


// form validation

function setSubmitButtonState(isFormValid){
    if (isFormValid){
      addButton.removeAttribute("disabled");
      addButton.classList.remove("input__btn_disabled"); 
    }
    else{
      addButton.setAttribute("disabled", true);
      addButton.classList.add("input__btn_disabled"); 
    }
  }

form.addEventListener('input', (evt) => {
    const isValid = artist.value.length > 0 && title.value.length > 0;
    setSubmitButtonState(isValid)
})


// auto-submit
const form = document.forms.myForm;
const input = form.elements.myInput;

form.addEventListener("input", function (evt) {
  // if four characters are entered
  // the submit event will be generated 
  if (input.length === 4) {
   form.submit();
  }
});

form.addEventListener("submit", function (evt) {
  // processing of the submit event
}); 
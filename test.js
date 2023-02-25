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

// change input behavior based on validation

// First, select all the needed form elements, and assign them to variables
const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");

// Code the 1st function, which shows the error element
const showInputError = (element) => {
  element.classList.add("form__input_type_error");
};

// Code the 2nd function, which hides the error element
const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
};

// Code the 3rd function, which checks if the field is valid
const isValid = () => {
  if (!formInput.validity.valid) {
    // If NOT (!), show the error element
    showInputError(formInput);
  } else {
    // If it's valid, hide the error element
    hideInputError(formInput);
  }
};
 
formElement.addEventListener("submit", function (evt) {
  // Cancel the browser default action, so that clicking on the submit button won't refresh the page
  evt.preventDefault();
});

// Call the isValid() function for each character input
formInput.addEventListener("input", isValid);


//template litearl as const!!!!!!!!!
const formError = formElement.querySelector(`.${formInput.id}-error`); 



/* adding message as span element*/
const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");

// Select each error message element using its unique class name
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (element) => {
  element.classList.add("form__input_type_error");
  // Show the error message
  formError.classList.add("form__input-error_active");
};

const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
  // Hide the error message
  formError.classList.remove("form__input-error_active");
};



//show error for multiple inputs
const showInputError = (formElement, inputElement, errorMessage) => {
  // Find the error message element inside the very function
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // The rest remains unchanged
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  // Find the error message element
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // The rest remains unchanged
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}; 



// set listeners for multiple inputs
const setEventListeners = (formElement) => {
  // Find all fields inside the form, and
  // make an array from them using the Array.from() method
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));

  // Iterate over the resulting array
  inputList.forEach((inputElement) => {
    // add the input event handler to each field
    inputElement.addEventListener("input", () => {
      // Call the isValid() function inside the callback,
      // and pass the form and the element to be checked to it
      isValid(formElement, inputElement)
    });
  });
};


// set event handlers for multiple forms
const enableValidation = () => {
  // It will find all forms with the specified class in DOM, and
  // make an array from them using the Array.from() method
  const formList = Array.from(document.querySelectorAll(".form"));

  // Iterate over the resulting array
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancel default behavior for each form
      evt.preventDefault();
    });

    // Call the setEventListeners() function for each form,
    // taking a form element as an argument
    setEventListeners(formElement);
  });
};

// Call the function
enableValidation();



//closing modal by click on owerlay
function closeModalByClick(evt){
  if(evt.target.classList.contains('modal')){
    closePopup(evt.target)
  }
};




function getCardElement(cardData){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector('.card__image');
  const cardLikeBtn = cardElement.querySelector('#card_like-button');
  const cardTitleEl = cardElement.querySelector('.card__title');
  const cardDeleteBtn = cardElement.querySelector('.card__delete-btn');
  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;

  cardImageEl.addEventListener('click', () =>{    
    modalImageEl.src = cardData.link;
    modalImageEl.alt = cardData.name;
    modalImageCaption.textContent = cardData.name;
    openPopup(imageModal);
  })
  cardDeleteBtn.addEventListener('click', () => removeCard(cardElement));
  cardLikeBtn.addEventListener('click', () => toggleLikeBtn(cardLikeBtn));


  return cardElement;  
}
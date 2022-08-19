import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('[name="email"]');
const textareaFieldRef = document.querySelector('[name="message"]');

populateInputs();

formRef.addEventListener('input', throttle(formDateHandler, 500));
formRef.addEventListener('submit', formSubmitHandler);

function formDateHandler() {
  const formDate = {
    email: emailInputRef.value,
    message: textareaFieldRef.value,
  };

  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formDate));
}

function populateInputs() {
  const savedFormValue = localStorage.getItem(FORM_STORAGE_KEY);
  const parseSavedFormValue = JSON.parse(savedFormValue);

  if (parseSavedFormValue) {
    emailInputRef.value = parseSavedFormValue.email;
    textareaFieldRef.value = parseSavedFormValue.message;
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)));
  localStorage.removeItem(FORM_STORAGE_KEY);
}

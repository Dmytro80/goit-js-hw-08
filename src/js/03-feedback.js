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

// --------------Другий варіант реалізації задачі-----------------

// const form = document.querySelector('.feedback-form');

// let formData = {};

// initForm();

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const submitFormData = new FormData(form);

//   let feedbackForm = {};

//   submitFormData.forEach((value, name) => {
//     feedbackForm[name] = value;
//   });
//   console.log(feedbackForm);

//   evt.currentTarget.reset();

//   localStorage.removeItem(FORM_STORAGE_KEY);
// }

// function onFormInput(evt) {
//   formData[evt.target.name] = evt.target.value;
//   localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
// }

// function initForm() {
//   const savedFormValue = localStorage.getItem(FORM_STORAGE_KEY);
//   if (savedFormValue) {
//     parseSavedFormValue = JSON.parse(savedFormValue);
//     Object.entries(parseSavedFormValue).forEach(([name, value]) => {
//       form.elements[name].value = value;
//       formData[name] = value;
//     });
//   }
// }

// --------------------Третій варіант вирішення задачі---------------------

// const form = document.querySelector('.feedback-form');

// initForm();

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const submitFormData = new FormData(form);

//   let feedbackForm = {};

//   submitFormData.forEach((value, name) => {
//     feedbackForm[name] = value;
//   });
//   console.log(feedbackForm);

//   evt.currentTarget.reset();

//   localStorage.removeItem(FORM_STORAGE_KEY);
// }

// function onFormInput(evt) {
//   let savedFormValue = localStorage.getItem(FORM_STORAGE_KEY);
//   savedFormValue = savedFormValue ? JSON.parse(savedFormValue) : {};
//   savedFormValue[evt.target.name] = evt.target.value;
//   localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(savedFormValue));
// }

// function initForm() {
//   let savedFormValue = localStorage.getItem(FORM_STORAGE_KEY);
//   if (savedFormValue) {
//     parseSavedFormValue = JSON.parse(savedFormValue);
//     Object.entries(parseSavedFormValue).forEach(([name, value]) => {
//       form.elements[name].value = value;
//     });
//   }
// }

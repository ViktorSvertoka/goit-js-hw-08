import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

updateForm();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  console.log(formData);
}

function updateForm() {
  let saveInput = localStorage.getItem(STORAGE_KEY);

  if (saveInput) {
    saveInput = JSON.parse(saveInput);
  } else {
    return;
  }

  Object.entries(saveInput).forEach(
    ([name, value]) => (form.elements[name].value = value)
  );
}

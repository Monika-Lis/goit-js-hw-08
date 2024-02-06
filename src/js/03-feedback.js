import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const saveFormData = () => {
  formData.email = feedbackForm.email.value;
  formData.message = feedbackForm.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

document.addEventListener('DOMContentLoaded', () => {
  if (formData) {
    feedbackForm.email.value = formData.email || '';
    feedbackForm.message.value = formData.message || '';
  }
});

feedbackForm.addEventListener('input', throttle(saveFormData, 500));
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
});

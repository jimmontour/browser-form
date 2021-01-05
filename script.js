// DOM Cache:
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('#submit');
const inputs = Array.from(document.querySelectorAll('input'));
const errors = document.querySelectorAll('.error');
const errorMessage = document.querySelector('.error-message');
const errorList = document.querySelector('.error-list')

// Event Delegation:
email.addEventListener('blur', () => {
   if (!email.validity.valid) {
      email.classList.add('invalid');
      email.classList.remove('valid');
      email.nextElementSibling.innerText = "Please use a valid email."

   } else if (email.validity.valid) {
      email.classList.add('valid');
      email.classList.remove('invalid');
      email.setCustomValidity('');
   }
});

country.addEventListener('blur', () => {
   if (!country.validity.valid) {
      country.classList.add('invalid');
      country.classList.remove('valid');
      country.nextElementSibling.innerText = "Please use a valid country."

   } else if (country.validity.valid) {
      country.classList.add('valid');
      country.classList.remove('invalid');
      country.setCustomValidity('');
   }
});

zipcode.addEventListener('blur', () => {
   if (!zipcode.validity.valid) {
      zipcode.classList.add('invalid');
      zipcode.classList.remove('valid');
      zipcode.nextElementSibling.innerText = "Please use a valid zipcode."

   } else if (zipcode.validity.valid) {
      zipcode.classList.add('valid');
      zipcode.classList.remove('invalid');
      zipcode.setCustomValidity('');
   }
});

password.addEventListener('blur', () => {
   if (!password.validity.valid) {
      password.classList.add('invalid');
      password.classList.remove('valid');
      password.nextElementSibling.innerText = "Please use a valid password."

   } else if (password.validity.valid) {
      password.classList.add('valid');
      password.classList.remove('invalid');
      password.setCustomValidity('');
   }
});

confirmPassword.addEventListener('blur', () => {
  if (confirmPassword.value !== password.value) {
     confirmPassword.nextElementSibling.innerText = "Passwords must match."
     confirmPassword.classList.add('invalid');
     confirmPassword.classList.remove('valid');
  } else {
     confirmPassword.classList.add('valid');
     confirmPassword.classList.remove('invalid');
     confirmPassword.setCustomValidity('');
  }
});

submitBtn.addEventListener('click', e => {
   console.log(inputs)
   inputs.forEach(input => {
      if (!input.validity.valid) {
         e.preventDefault();
      }
   });
})

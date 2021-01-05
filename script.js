// DOM Cache:
const form = document.querySelector('form')
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('#submit');

// Event Delegation:
email.addEventListener('input', e => {
   if (email.validity.typeMismatch) {
      email.setCustomValidity('This needs to be a valid email!')
   } else {
      email.setCustomValidity('')
   }
} )

country.addEventListener('input', e => {
   if (country.validity.typeMismatch) {
      country.setCustomValidity('This must be a valid country!')
   } else {
      country.setCustomValidity('')
   }
})

zipcode.addEventListener('input', e => {
   if (zipcode.validity.typeMismatch) {
      zipcode.setCustomValidity('This must be a valid 5 digit number!')
   } else {
      zipcode.setCustomValidity('')
   }
})

password.addEventListener('input', e => {
   if (password.validity.typeMismatch) {
      password.setCustomValidity('Password must be between 6-20 characters!')
   } else {
      password.setCustomValidity('')
   }
})

confirmPassword.addEventListener('input', e => {
   if (confirmPassword.value !== password.value) {
      confirmPassword.setCustomValidity('Passwords must match!')
   } else {
      confirmPassword.setCustomValidity('')
   }
})

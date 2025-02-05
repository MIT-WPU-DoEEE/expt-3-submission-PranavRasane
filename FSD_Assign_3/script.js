console.log('script.js is loaded')

// Form validation logic
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm')

  form.addEventListener('submit', function (event) {
    event.preventDefault() // Prevent form default submission
    let isValid = true

    // Name validation
    const nameInput = document.getElementById('name')
    const nameError = document.getElementById('nameError')
    const nameValue = nameInput.value.trim()
    if (nameValue === '' || !/^[A-Za-z ]{3,}$/.test(nameValue)) {
      nameError.textContent = 'Enter a valid name (at least 3 letters).'
      isValid = false
    } else {
      nameError.textContent = ''
    }

    // Phone validation
    const phoneInput = document.getElementById('phone')
    const phoneError = document.getElementById('phoneError')
    const phoneValue = phoneInput.value.trim()
    if (phoneValue === '' || !/^\d{10}$/.test(phoneValue)) {
      phoneError.textContent = 'Enter a valid 10-digit phone number.'
      isValid = false
    } else {
      phoneError.textContent = ''
    }

    // Email validation
    const emailInput = document.getElementById('email')
    const emailError = document.getElementById('emailError')
    const emailValue = emailInput.value.trim()
    if (emailValue === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      emailError.textContent = 'Enter a valid email address.'
      isValid = false
    } else {
      emailError.textContent = ''
    }

    // Zip code validation
    const zipInput = document.getElementById('zip')
    const zipError = document.getElementById('zipError')
    const zipValue = zipInput.value.trim()
    if (zipValue === '' || !/^\d{5,6}$/.test(zipValue)) {
      zipError.textContent = 'Enter a valid zip code (5-6 digits).'
      isValid = false
    } else {
      zipError.textContent = ''
    }

    // Submit form via AJAX if valid
    if (isValid) {
      submitForm()
    }
  })
})

console.log('ajax.js is loaded')

function submitForm() {
  console.log('Submitting form...') // Debugging Log

  $.ajax({
    url: 'submit.php', // PHP file to handle form
    type: 'POST',
    data: $('#myForm').serialize(),
    dataType: 'json',
    success: function (response) {
      if (response.status === 'success') {
        alert(response.message)
        $('#myForm')[0].reset()
        $('.error-message').text('')
      } else {
        alert('Error: ' + response.message)

        if (response.errors) {
          $('#nameError').text(response.errors.name || '')
          $('#phoneError').text(response.errors.phone || '')
          $('#emailError').text(response.errors.email || '')
          $('#zipError').text(response.errors.zip || '')
        }
      }
    },
    error: function () {
      alert('An error occurred while submitting the form.')
    },
  })
}

$(document).ready(function () {
  $('#myForm').on('submit', function (event) {
    event.preventDefault()
    submitForm()
  })
})

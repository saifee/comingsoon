document.querySelector('.email-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value === '') {
    errorMessage.textContent = 'Email address is required';
    emailInput.focus();
  } else if (!emailPattern.test(emailInput.value)) {
    errorMessage.textContent = 'Please provide a valid email address';
    emailInput.focus();
  } else {
    errorMessage.textContent = '';
    alert('Thank you! You will be notified.');
  }
});

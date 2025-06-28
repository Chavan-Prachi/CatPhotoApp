// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cat-form');
  const confirmation = document.getElementById('confirmation-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual submission

    // Get selected values
    const indoorOutdoor = document.querySelector('input[name="indoor-outdoor"]:checked').value;

    const personalities = Array.from(
      document.querySelectorAll('input[name="personality"]:checked')
    ).map(input => input.value);

    const photoURL = form.catphotourl.value;

    // Show confirmation message
    confirmation.innerHTML = `
      ✅ Thank you!<br>
      Your cat is an <strong>${indoorOutdoor}</strong> cat.<br>
      Personality: <strong>${personalities.join(', ') || 'None selected'}</strong><br>
      Photo URL submitted: <strong>${photoURL}</strong>
    `;
    confirmation.style.display = 'block';

    // Reset the form
    form.reset();
  });
});

//your JS code here. If required.
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submit');
const existingButton = document.getElementById('existing');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
  alert(`Logged in as ${username}`);
});

if (localStorage.getItem('username') && localStorage.getItem('password')) {
  existingButton.style.display = 'block';
}

existingButton.addEventListener('click', () => {
  const savedUsername = localStorage.getItem('username');
  alert(`Logged in as ${savedUsername}`);
});
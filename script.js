
// JavaScript for handling form submission and local storage
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve input values
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var rememberMe = document.getElementById('checkbox').checked;
    
    // If "Remember me" is checked, store username and password in local storage
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // If not checked, remove stored username and password
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
    
    // Show alert with logged in message
    alert('Logged in as ' + username);
  });
  
  // Check if there are saved details to show the "Login as existing user" button
  var existingUserButton = document.createElement('button');
  existingUserButton.setAttribute('id', 'existing');
  existingUserButton.textContent = 'Login as existing user';
  existingUserButton.style.marginTop = '10px';
  
  // Append the button if there are saved details
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    document.getElementById('loginForm').appendChild(existingUserButton);
  }
  
  // Event listener for the existing user button
  existingUserButton.addEventListener('click', function() {
    var username = localStorage.getItem('username');
    // Show alert with logged in message for existing user
    alert('Logged in as ' + username);
  });
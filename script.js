function signIn() {
    // Get values from the form
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Send data to the server for authentication (replace this with your server-side logic)
    // You should use HTTPS and implement server-side validation and authentication
    fetch('/your-server-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the authentication response from the server
      if (data.success) {
        alert('Sign In Successful!');
        // Redirect to another page or perform other actions as needed
      } else {
        alert('Sign In Failed. Please check your credentials.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
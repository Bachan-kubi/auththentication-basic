function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // we can perform authentication here, e.g., by making an API call to a server-side endpoint

  // For instanes purposes, let's assume the username is "admin" and the password is "password"
  if (username === "admin" && password === "password") {
    // Authentication successful
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loggedInArea").style.display = "block";
    document.getElementById("usernameDisplay").textContent = username;
  } else {
    // Authentication failed
    var errorMessage = document.createElement("p");
    errorMessage.className = "error";
    errorMessage.textContent = "Invalid username or password.";
    document.getElementById("loginForm").appendChild(errorMessage);
  }
}

function logout() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("loggedInArea").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("usernameDisplay").textContent = "";
}

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const errorText = document.querySelector(".errorText");

  if (password !== confirmPassword) {
    errorText.textContent = "Passwords do not match";
     errorText.style.color = "red";
     errorText.style.fontStyle = "italic";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    errorText.textContent = "User already exists";
    errorText.style.fontStyle = "italic";
    return;
  }

  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password,
    isAuthenticated: false,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.replace("../index.html");
});

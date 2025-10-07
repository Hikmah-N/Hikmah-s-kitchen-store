document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorText = document.querySelector(".errorText");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = users.find((user) => user.email === email);

  if (!foundUser) {
    errorText.textContent = "User not found";
    return;
  }

  if (foundUser.password !== password) {
    errorText.textContent = "Invalid password";
    return;
  }

  // Set user as authenticated
  foundUser.isAuthenticated = true;

  // Update users array
  const updatedUsers = users.map((user) =>
    user.email === foundUser.email ? foundUser : user
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // Store current user separately
  localStorage.setItem("currentUser", JSON.stringify(foundUser));

  // Redirect to home page
  window.location.replace("./pages/Home.html");
});

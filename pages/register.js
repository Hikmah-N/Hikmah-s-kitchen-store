document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        const errorText = document.querySelector(".errorText");
        errorText.textContent = "Password do not match"
        
        return;
    }

    const user = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        password,
    };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.replace("../index.html")
    
})
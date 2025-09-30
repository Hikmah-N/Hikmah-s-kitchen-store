document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const getUserDetails = JSON.parse (localStorage.getItem("users")) || [];
    const foundUser = getUserDetails.find((user)=>user.email === email);

    let errorText = document.querySelector(".errorText");

    if(foundUser.password === password && foundUser.email === email) {
        errorText.textContent = "You are logged in";
        window.location.replace("./pages/Home.html");
    } else{
        errorText.textContent = "Invalid email or password"
        return;
    }
}); 


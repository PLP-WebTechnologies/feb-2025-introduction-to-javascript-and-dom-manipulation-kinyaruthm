
document.getElementById("togglePassword").addEventListener("click", function () {
    const password = document.getElementById("password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    if (username === "admin" && password === "1234") {
      message.style.color = "green";
      message.textContent = "Login successful";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid credentials";
    }
  });

function toggleHint() {
    const hintBox = document.getElementById("hintBox");
    hintBox.style.display = hintBox.style.display === "none" ? "block" : "none";
  }
  

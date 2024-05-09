const login = document.getElementById("log-in-btn");
login.addEventListener("click", () => {
  console.log("click");

  window.open("./view/LoginForm.html", "_self");
});

const loginright = document.getElementById("login-card");
loginright.addEventListener("click", () => {
  console.log("click");

  window.open("./view/LoginForm.html", "_self");
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (token) {
    const loginLink = document.getElementById("log-in-btn");
    if (loginLink) {
      loginLink.style.display = "none";
    }

    const loginrightbtn = document.getElementById("login-card");
    if (loginrightbtn) {
      loginrightbtn.style.display = "none";
    }
  }
});

export { login };

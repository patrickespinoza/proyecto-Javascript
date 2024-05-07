let login = document.getElementById("login");
login.addEventListener("click", () => {
  console.log("click");

  window.open("./view/LoginForm.html", "_self");
});

let loginright = document.getElementById("loginright");
loginright.addEventListener("click", () => {
  console.log("click");

  window.open("./view/LoginForm.html", "_self");
});

document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  if (token) {
    const loginLink = document.getElementById("login");
    if (loginLink) {
      loginLink.style.display = "none";
    }

    const loginrightbtn = document.getElementById("loginright");
    if (loginrightbtn) {
      loginrightbtn.style.display = "none";
    }
  }
});

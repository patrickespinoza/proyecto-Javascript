let loginPostButtonsRender = (token) => {
    if (token) {
      document.getElementById("log-in-btn").style.display = "none";
      document.getElementById("login-card").style.display = "none";
      document.getElementById("create-account-btn").style.display = "none";
      document.getElementById("create-post-btn").style.display = "block";
      document.getElementById("alert-bell").style.display = "block";
      document.getElementById("user-avatar").style.display = "block";
    } else {
      document.getElementById("log-in-btn").style.display = "block";
      document.getElementById("login-card").style.display = "block";
      document.getElementById("create-account-btn").style.display = "block";
      document.getElementById("create-post-btn").style.display = "none";
      document.getElementById("alert-bell").style.display = "none";
      document.getElementById("user-avatar").style.display = "none";
    }
  };

  export { loginPostButtonsRender };
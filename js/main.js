//se crea variable token que obtiene el token del local storage
//let token = localStorage.getItem("token");
const token = true; // Token simulado para propositos de prueba

/* 
Ejemplo de uso de la variable token en otro archivo:
let token = localStorage.getItem("token");

token
  ? window.open("../views/products.html", "_self")
  : window.open("../views/loginForm.html", "_self");
 */

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

loginPostButtonsRender(true);

let taglist = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"];

const createPopularTagsList = (tag) => {
    let popularTag = document.createElement("a");
    popularTag.setAttribute("href", "#");
    popularTag.classList.add("btn", "text-start", "btn-light");
    return popularTag;
};

const renderPopularTags = (taglist) => {
    let tagContainer = document.getElementById("popular-tags");
    taglist.forEach((tag) => {
        let tagElement = createPopularTagsList(tag);
        tagElement.textContent = tag;
        tagContainer.appendChild(tagElement);
    });
}

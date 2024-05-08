import { loginPostButtonsRender } from "./modules/mainpage/detectLogin.js";

import { renderPopularTags } from "./modules/mainpage/printPopularTags.js";

import { posts } from "./modules/mainpage/datosPosts.js";

import { printTaggedPostList } from "./modules/mainpage/taggedPostList.js";

import { createPostList, printPostCards } from "./modules/mainpage/postCards.js";

import { getTopPosts, printTrendingPosts } from "./modules/mainpage/trendingPosts.js";

import { getRelevantPosts } from "./modules/mainpage/getRelevantPosts.js";

import { getLatestPosts } from "./modules/mainpage/getLatestPosts.js";

//se crea variable token que obtiene el token del local storage
//let token = localStorage.getItem("token");
const token = true; // Token simulado para propositos de prueba

let taglist = [
  "JavaScript",
  "ES6",
  "Frontend",
  "WebDevelopment",
  "Python",
  "Django",
  "Backend",
  "Swift",
  "iOS",
  "MobileDevelopment",
  "AppDevelopment",
  "Java",
  "Spring",
  "Go",
  "APIs",
]; //taglist simulado para propositos de prueba

/* 
Ejemplo de uso de la variable token en otro archivo:
let token = localStorage.getItem("token");

token
  ? window.open("../views/products.html", "_self")
  : window.open("../views/loginForm.html", "_self");
 */

// primer render de botones de login
loginPostButtonsRender(token);
// despues se renderiza el segundo elemento dinamico, la lista de tags
renderPopularTags(taglist);
//despues se renderiza el aside derecho
printTaggedPostList("WebDevelopment", posts, "random-tag-1");
printTaggedPostList("Backend", posts, "random-tag-2");
printTrendingPosts(posts, "trending-post-wrapper");

//se convierte el objeto posts en un array de posts

let relevantPostSorter = document.getElementById("relevant-post-sorter");
relevantPostSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const postList = getRelevantPosts(posts);
  printPostCards(postList, "post-wrapper");
});

let latestPostSorter = document.getElementById("latest-post-sorter");
latestPostSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const postList = getLatestPosts(posts);
  printPostCards(postList, "post-wrapper");
});

let topPostSorter = document.getElementById("top-post-sorter");
topPostSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const postList = createPostList(getTopPosts(posts));
  printPostCards(postList,"post-wrapper");
});


let postKeys = Object.keys(posts);
console.log(postKeys);

let filterInput = document.getElementById("search-bar");
filterInput.addEventListener("keyup", (event) => {
  let query = event.target.value;
  


  /* let result = posts.filter((title) =>
    posts.title.toLowerCase().includes(query.toLowerCase())
  );
 */
  console.log(query);
  console.log(posts.post1.title);
  //printAllProducts(result, "product-wrapper");
});

printPostCards(createPostList(posts), "post-wrapper");
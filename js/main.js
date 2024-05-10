import { loginPostButtonsRender } from "./modules/mainpage/detectLogin.js";

import { renderPopularTags, getTagList } from "./modules/mainpage/printPopularTags.js";

//import { posts } from "./modules/mainpage/datosPosts.js";
let posts = await fetchAllPosts();
//ya toma los datos de la base de datos ya no del dummy
import { printTaggedPostList, filterByTag } from "./modules/mainpage/taggedPostList.js";

const url = window.location.href;
//instancia url
const params = new URLSearchParams(new URL(url).search);
//extraer params
let tag = params.get("tag");


let filteredPosts = filterByTag(tag, posts);


import { createPostList, printPostCards } from "./modules/mainpage/postCards.js";

import { getTopPosts, printTrendingPosts, sortPostsByRating } from "./modules/mainpage/trendingPosts.js";


import { getRelevantPosts } from "./modules/mainpage/getRelevantPosts.js";

import { getLatestPosts } from "./modules/mainpage/getLatestPosts.js";


import { login } from "./modules/mainpage/LoginPrincipal.js";

import { createPost, fetchPostByKey, fetchAllPosts, deletePost } from "./modules/databaseApi.js";


//se crea variable token que obtiene el token del local storage
let token = localStorage.getItem("token");
//const token = false; // Token simulado para propositos de prueba


let logOutButton = document.getElementById("log-out-btn");
logOutButton.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("token");
  window.open("../index.html", "_self");
});

/* 
Ejemplo de uso de la variable token en otro archivo:
let token = localStorage.getItem("token");

token
  ? window.open("../views/posts.html", "_self")
  : window.open("../views/loginForm.html", "_self");
 */

// primer render de botones de login
loginPostButtonsRender(token);
// despues se renderiza el segundo elemento dinamico, la lista de tags
renderPopularTags(posts);
//despues se renderiza el aside derecho

printTaggedPostList(getTagList(posts)[Math.floor(Math.random() * (getTagList(posts).length - 0 + 1)) + 0], posts, "random-tag-1");
printTaggedPostList(getTagList(posts)[Math.floor(Math.random() * (getTagList(posts).length - 0 + 1)) + 0], posts, "random-tag-2");
printTrendingPosts(posts, "trending-post-wrapper");

//se convierte el objeto posts en un array de posts

let relevantPostSorter = document.getElementById("relevant-post-sorter");
relevantPostSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const postList = createPostList(getRelevantPosts(posts));
  printPostCards(postList, "post-wrapper");
});

let latestPostSorter = document.getElementById("latest-post-sorter");
latestPostSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const postList = createPostList(getLatestPosts(posts));
  printPostCards(postList, "post-wrapper");
});

let topPostSorter = document.getElementById("top-post-sorter");
topPostSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const postList = createPostList(sortPostsByRating(posts));
  printPostCards(postList, "post-wrapper");
});

let filterByTagInput = document.querySelectorAll('[href^="?tag="]');
filterByTagInput.forEach((tag) => {
  tag.addEventListener("click", (event) => {
    event.preventDefault();
    let tag = event.target.textContent.slice(1);
    let filteredPosts = filterByTag(tag, posts);
    printPostCards(filteredPosts, "post-wrapper");
  });
});

let filterInput = document.getElementById("search-bar");
filterInput.addEventListener("keyup", (event) => {
  let query = event.target.value;
  let postList = createPostList(posts);
  let result = postList.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));



  /* let result = posts.filter((title) =>
    posts.title.toLowerCase().includes(query.toLowerCase())
  );
 */
  printPostCards(result, "post-wrapper");
});



// procedimiento para filtrar posts por tags

/* 
Defino que tag quiero filtrar
Verifico en mi lista de posts si el tag que quiero filtrar está en la lista de tags de cada post
Si está, lo agrego a una lista de posts filtradosadada
Regreso la lista de posts filtrados

*/

printPostCards(createPostList(posts), "post-wrapper");

let postTagInputTags = document.querySelectorAll('.post-footer a, [href^="?tag="]');
postTagInputTags.forEach((tag) => {
  tag.addEventListener("click", (event) => {
    event.preventDefault();
    let tag = event.target.textContent.slice(1);
    let filteredPosts = filterByTag(tag, posts);
    printPostCards(filteredPosts, "post-wrapper");
  });
});
tag === null ? printPostCards(createPostList(posts), "post-wrapper") : printPostCards(filteredPosts, "post-wrapper");



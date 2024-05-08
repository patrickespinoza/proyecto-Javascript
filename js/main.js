import { loginPostButtonsRender } from "./modules/mainpage/detectLogin.js";

import { renderPopularTags } from "./modules/mainpage/printPopularTags.js";

//import { posts } from "./modules/mainpage/datosPosts.js";
let posts = await fetchAllPosts();
//ya toma los datos de la base de datos ya no del dummy
import { printTaggedPostList } from "./modules/mainpage/taggedPostList.js";

import { createPostList, printPostCards} from "./modules/mainpage/postCards.js";

import { getTopPosts, printTrendingPosts, sortPostsByRating } from "./modules/mainpage/trendingPosts.js";

import { getRelevantPosts } from "./modules/mainpage/getRelevantPosts.js";

import { getLatestPosts } from "./modules/mainpage/getLatestPosts.js";

import { createPost, fetchPostByKey, fetchAllPosts, deletePost}  from "./modules/databaseApi.js";

//se crea variable token que obtiene el token del local storage
let token = localStorage.getItem("token");
//const token = false; // Token simulado para propositos de prueba



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
printTaggedPostList("WebDevelopment", posts, "random-tag-1");
printTaggedPostList("Backend", posts, "random-tag-2");
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
  printPostCards(postList,"post-wrapper");
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

printPostCards(createPostList(posts), "post-wrapper");
import { loginPostButtonsRender } from "./mainpage/detectLogin.js";

import { renderPopularTags } from "./mainpage/printPopularTags.js";

import { posts } from "./mainpage/datosPosts.js";

import { printTaggedPostList } from "./mainpage/taggedPostList.js";

import { createPostList, printPostCards } from "./mainpage/postCards.js";

import { printTrendingPosts } from "./mainpage/trendingPosts.js";

import { getRelevantPosts } from "./mainpage/getRelevantPosts.js";

import { getLatestPosts } from "./mainpage/getLatestPosts.js";

//se crea variable token que obtiene el token del local storage
//let token = localStorage.getItem("token");
const token = true; // Token simulado para propositos de prueba

let taglist = ["JavaScript", "ES6", "Frontend", "WebDevelopment", "Python", "Django", "Backend", "Swift", "iOS", "MobileDevelopment", "AppDevelopment", "Java", "Spring","Go", "APIs"]; //taglist simulado para propositos de prueba

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
let postList = createPostList(posts);
// se imprimen las tarjetas a partir del array de posts
printPostCards(postList, "post-wrapper");






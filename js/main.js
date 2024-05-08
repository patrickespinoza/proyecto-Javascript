import { loginPostButtonsRender } from "./mainpage/detectLogin.js";

import { renderPopularTags } from "./mainpage/printPopularTags.js";

import { posts } from "./mainpage/datosPosts.js";

import { printTaggedPostList } from "./mainpage/taggedPostList.js";

import { createPostList, printPostCards } from "./mainpage/postCards.js";

import { createTrendingPostList, printTrendingPosts } from "./mainpage/trendingPosts.js";

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


loginPostButtonsRender(token);

let taglist = ["JavaScript", "ES6", "Frontend", "WebDevelopment", "Python", "Django", "Backend", "Swift", "iOS", "MobileDevelopment", "AppDevelopment", "Java", "Spring","Go", "APIs"];

renderPopularTags(taglist);

printTaggedPostList("WebDevelopment", posts, "random-tag-1");
printTaggedPostList("Backend", posts, "random-tag-2");


let postList = createPostList(posts);
console.log(postList)
printPostCards(postList, "post-wrapper");

let trendingPosts = createTrendingPostList(posts);

/* 
    <div class="d-grid gap-2 p-0 mt-3" id="trending-post-wrapper">
        <!-- el contenido de esta parte debe ser dinamico, basado en los distintos posts en la base de datos -->
        
        <a class="btn btn-light text-start" href="">Titulo largo de un post que se va a trabajar con
            para que quede
            bien chidote ay nomaaas 👀🤓👍🏻</a>
        <a class="btn btn-light text-start" href="">Titulo largo de un post que se va a trabajar con
            para que quede
            bien chidote ay nomaaas 👀🤓👍🏻</a>
    </div>
*/


printTrendingPosts(trendingPosts, "trending-post-wrapper");

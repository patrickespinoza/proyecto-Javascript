import { loginPostButtonsRender } from "./mainpage/detectLogin.js";

import { renderPopularTags } from "./mainpage/printPopularTags.js";

import { posts } from "./mainpage/datosPosts.js";

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


loginPostButtonsRender(true);

let taglist = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "Swift", "PHP", "Rust"];

renderPopularTags(taglist);

/* 
                    <div class="card mb-3">
                        <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fw19259c6raar2ple6904.png"
                            class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="d-flex">
                                <img src="assets/generic-avatar.jpg" alt="" class="rounded-circle  me-3" width="40"
                                    height="40" />

                                <div class="d-flex flex-column">
                                    <a class="card-subtitle mb-2 text-muted text-start">Author</a>
                                    <a class="">date</a>
                                </div>
                            </div>
                            <a class="card-title post-title ">Post title</a>
                            <div class="d-flex">
                                <a class="btn btn-light">tag 1</a>
                                <a class="btn btn-light">tag 2</a>
                                <a class="btn btn-light">tag 3</a>
                            </div>
                            <div class="d-flex">
                                <a class="btn btn-light">Reactions(solo si hay)</a>
                                <a class="btn btn-light me-auto">comments(solo si hay)</a>
                                <span>{n} minute read</span>
                                <a class="btn btn-light">🔖</a>
                            </div>
                        </div>
                    </div>
                     */
let createPostCard = (post) => {
    let { title, description, image, author, tags, date, reactions, rating, relevant } = post;
    const postCard = document.createElement("div");
    postCard.classList.add("card", "mb-3");
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", image);
    cardImage.classList.add("card-img-top");
    cardImage.style.
    cardImage.setAttribute("height", "200");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const cardAuthor = document.createElement("div");
    cardAuthor.classList.add("d-flex");
    const authorAvatar = document.createElement("img");
    authorAvatar.setAttribute("src", "assets/generic-avatar.jpg");
    authorAvatar.classList.add("rounded-circle", "me-3");
    authorAvatar.setAttribute("width", "40");
    authorAvatar.setAttribute("height", "40");
    const authorInfo = document.createElement("div");
    authorInfo.classList.add("d-flex", "flex-column");
    const authorName = document.createElement("a");
    authorName.classList.add("card-subtitle", "mb-2", "text-muted", "text-start");
    authorName.textContent = author;
    const postDate = document.createElement("a");
    postDate.classList.add("text-muted");
    postDate.textContent = date;
    authorInfo.appendChild(authorName);
    authorInfo.appendChild(postDate);
    cardAuthor.appendChild(authorAvatar);
    cardAuthor.appendChild(authorInfo);
    const postTitle = document.createElement("a");
    postTitle.classList.add("card-title", "post-title");
    postTitle.textContent = title;
    const postTags = document.createElement("div");
    postTags.classList.add("d-flex");
    tags.forEach((tag) => {
        const tagElement = document.createElement("a");
        tagElement.classList.add("btn", "btn-light");
        tagElement.textContent = tag;
        postTags.appendChild(tagElement);
    });
    const postReactions = document.createElement("div");
    postReactions.classList.add("d-flex");
    const postComments = document.createElement("a");
    postComments.classList.add("btn", "btn-light");
    postComments.textContent = reactions.comments;
    const postReadTime = document.createElement("span");
    postReadTime.textContent = "5 minute read";
    const postBookmark = document.createElement("a");
    postBookmark.classList.add("btn", "btn-light");
    postBookmark.textContent = "🔖"
    postReactions.appendChild(postComments);
    postReactions.appendChild(postReadTime);
    postReactions.appendChild(postBookmark);
    cardBody.appendChild(cardAuthor);
    cardBody.appendChild(postTitle);
    cardBody.appendChild(postTags);
    cardBody.appendChild(postReactions);
    postCard.appendChild(cardImage);
    postCard.appendChild(cardBody);
    return postCard;
}

const printPostCards = (posts, containerId) => {
    let postContainer = document.getElementById(containerId);
    for (let post in posts) {
        let postElement = createPostCard(posts[post]);
        postContainer.appendChild(postElement);
    }
};

printPostCards(posts, "post-wrapper");

/* <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex">
                                <img src="assets/generic-avatar.jpg" alt="" class="rounded-circle  me-3" width="40"
                                    height="40" />

                                <div class="d-flex flex-column">
                                    <a class="card-subtitle mb-2 text-muted text-start">Author</a>
                                    <a class="">date</a>
                                </div>
                            </div>
                            <a class="card-title post-title ">Post title</a>
                            <div class="d-flex">
                                <a class="btn btn-light">tag 1</a>
                                <a class="btn btn-light">tag 2</a>
                                <a class="btn btn-light">tag 3</a>
                            </div>
                            <div class="d-flex">
                                <a class="btn btn-light">Reactions(solo si hay)</a>
                                <a class="btn btn-light me-auto">comments(solo si hay)</a>
                                <span>{n} minute read</span>
                                <a class="btn btn-light">🔖</a>
                            </div>
                        </div>
                    </div> */


import {loginPostButtonsRenderDetail} from "../js/modules/mainpage/detectLogin.js";

import { fetchPostByKey } from "../js/modules/databaseApi.js";

let token = localStorage.getItem("token");

loginPostButtonsRenderDetail(token);

let logOutButton = document.getElementById("log-out-btn");
logOutButton.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("token");
  window.open("../index.html", "_self");
});

const url = window.location.href;
//instancia url
const params = new URLSearchParams(new URL(url).search);
//extraer params
let postKey = params.get("key");



const printPostData = async (postKey) => {
  let postData = await fetchPostByKey(postKey);
  let { title, key, description, content, image, author, tags, date, reactions, rating, relevant } = postData;
  let tagWrapper = document.getElementById("tag-wrapper");
  tags.forEach((tag) => {
    let tagLink = document.createElement("a");
    tagLink.setAttribute("href", `../mainpage.html?tag=${tag}`);
    tagLink.textContent = `#${tag}`;
    let tagDiv = document.createElement("div");
    tagDiv.appendChild(tagLink);
    tagWrapper.appendChild(tagDiv);
  });
  document.getElementById("tag-quantity").innerText = `🏷️${tags.length}`;
  document.getElementById("post-author").innerText = author;
  document.getElementById("post-author2").innerText = author;
  document.getElementById("post-date").innerText = date;
  document.getElementById("post-title").innerText = title;
  document.getElementById("post-content").innerText = content;
  document.getElementById("post-picture").setAttribute("src", image);
};

await printPostData(postKey);
import {printTagButtons} from "./modules/createPosts/makeTagList.js";
import { createPost } from "./modules/databaseApi.js";

let tags = [];
let tagInput = document.getElementById("tag-input");
tagInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.key === ",") {
    let tag = event.target.value.slice(0, -1);
    if (tags.length <= 4) {
      if (tags.includes(tag) == false) {
        tags.push(tag);
      }
    }
    tagInput.value = "";
    printTagButtons(tags, "tag-wrapper");
  }
});

let postObject = {}

let titleInput = document.querySelector("input[name='post-title']");
let descriptionInput = document.querySelector("input[name='post-description']");
let imageInput = document.querySelector("input[name='post-image']");
let authorInput = document.querySelector("input[name='post-author']");
let dateInput = document.querySelector("input[name='post-date']");
let ratingInput = document.querySelector("input[name='post-rating']");
let relevantCheckbox = document.getElementById("relevant-checkbox");
let likesInput = document.querySelector("input[name='Likes']");
let dislikesInput = document.querySelector("input[name='Dislikes']");
let wowInput = document.querySelector("input[name='Wow']");
let sadInput = document.querySelector("input[name='Sad']");
let contentInpunt = document.querySelector("textarea[name='post-content']");
let createPostButton = document.getElementById("create-post-btn");

createPostButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(tags);
    console.log(titleInput.value);
    console.log(descriptionInput.value);
    console.log(imageInput.value);
    console.log(authorInput.value);
    console.log(dateInput.value);
    console.log(ratingInput.value);
    console.log(relevantCheckbox.checked);
    console.log(likesInput.value);
    console.log(dislikesInput.value);
    console.log(wowInput.value);
    console.log(sadInput.value);

});
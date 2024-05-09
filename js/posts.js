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

createPostButton.addEventListener("click", async (event) => {
    event.preventDefault();
    postObject.title = titleInput.value;
    postObject.description = descriptionInput.value;
    postObject.image = imageInput.value;
    postObject.author = authorInput.value;
    tags = [] ? postObject.tags = tags : postObject.tags = ["general"];
    dateInput.value === "" ? postObject.date = dateInput.value: postObject.date = new Date().toLocaleDateString();
    postObject.rating = ratingInput.value;
    postObject.relevant = relevantCheckbox.value;
    postObject["reactions"] = {
        likes: likesInput.value,
        dislikes: dislikesInput.value,
        wow: wowInput.value,
        sad: sadInput.value
    };
    postObject.content = contentInpunt.value;
    await createPost(postObject);
    window.open("mainpage.html", "_self");

});
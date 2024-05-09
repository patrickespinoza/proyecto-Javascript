import {printTagButtons} from "./modules/createPosts/makeTagList.js";

let tags = [];
let tagInput = document.getElementById("tag-input");
tagInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.key === ",") {
    let tag = event.target.value.slice(0, -1);
    if (tags.length <= 5) {
      if (tags.includes(tag) == false) {
        tags.push(tag);
      }
    }
    tagInput.value = "";
    console.log(tags);
    printTagButtons(tags, "tag-wrapper");
  }
});

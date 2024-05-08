import { createPostList } from "./postCards.js";

const getTagList = (posts) => {
    const postList = createPostList(posts);
    let tagList = [];
    postList.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!tagList.includes(tag)) {
          tagList.push(tag);
        }
      });
    });
    return tagList;
}

const createPopularTagsList = (tag) => {
    let popularTag = document.createElement("a");
    popularTag.setAttribute("href", "#");
    popularTag.classList.add("btn", "text-start", "btn-light");
    return popularTag;
};

const renderPopularTags = (posts) => {
    const taglist = getTagList(posts);
    let tagContainer = document.getElementById("popular-tags");
    taglist.forEach((tag) => {
        let tagElement = createPopularTagsList(tag);
        tagElement.textContent = tag;
        tagContainer.appendChild(tagElement);
    });
}

export {renderPopularTags}
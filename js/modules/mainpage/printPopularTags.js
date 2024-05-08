const createPopularTagsList = (tag) => {
    let popularTag = document.createElement("a");
    popularTag.setAttribute("href", "#");
    popularTag.classList.add("btn", "text-start", "btn-light");
    return popularTag;
};

const renderPopularTags = (taglist) => {
    let tagContainer = document.getElementById("popular-tags");
    taglist.forEach((tag) => {
        let tagElement = createPopularTagsList(tag);
        tagElement.textContent = tag;
        tagContainer.appendChild(tagElement);
    });
}

export { renderPopularTags}
const getTopPosts = (posts) => {
    let trendingPosts = {};
    for (let post in posts) {
        if (posts[post].rating >= 4) {
            trendingPosts[post] = posts[post];
        }
    }
    return trendingPosts;
};
const printTrendingPosts = (posts, containerId) => {
    let trendingPostContainer = document.getElementById(containerId);
    let trendingPosts = getTopPosts(posts)
    for (let post in trendingPosts) {
        let postElement = document.createElement("a");
        postElement.classList.add("btn", "btn-light", "text-start");
        postElement.setAttribute("href", "#");
        postElement.textContent = posts[post].title;
        trendingPostContainer.appendChild(postElement);
    }

}

export { getTopPosts, printTrendingPosts };
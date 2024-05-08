const getTopPosts = (posts) => {
    let trendingPosts = {};
    for (let post in posts) {
        if (posts[post].rating >= 4) {
            trendingPosts[post] = posts[post];
        }
    }
    return trendingPosts;
};

const getKeyTopPosts = (posts) => {
    let postKeys = Object.keys(posts);
    let trendingposts = postKeys.reduce((acc, key) => {
        if (posts[key].rating >= 4) {
            posts[key].key = key;
            acc[key] = posts[key];
        }
        return acc;
    }, {});

    return trendingposts;
};

const printTrendingPosts = (posts, containerId) => {
    
    let trendingPostContainer = document.getElementById(containerId);
    let trendingPosts = getKeyTopPosts(posts);
    
    
    for (let post in trendingPosts) {
        
        const keyURL = `post.html?key=${trendingPosts[post].key}`
        let postElement = document.createElement("a");
        postElement.classList.add("btn", "btn-light", "text-start");
        postElement.setAttribute("href", keyURL);
        postElement.textContent = posts[post].title;
        trendingPostContainer.appendChild(postElement);
    }
// se puede hacer con forEach o map pero usaremos esta funcion por variedad

}

export { getTopPosts, printTrendingPosts };
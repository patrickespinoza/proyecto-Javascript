const getRelevantPosts = (posts) => {
    let relevantPosts = {};
    for (let post in posts) {
        if (posts[post].relevant) {
            relevantPosts[post] = posts[post];
        }
    }
    return relevantPosts;
}

export { getRelevantPosts };

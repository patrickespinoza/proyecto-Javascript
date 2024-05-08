const sortLatestPosts = (posts) => {
  let postDates = [];
  for (let post in posts) {
    postDates.push(posts[post].date);
  }
  return postDates.sort().reverse();
};

const getLatestPosts = (posts) => {
  let dates = sortLatestPosts(posts);
  let latestPosts = [];
  for (let date in dates) {
    for (let post in posts) {
      if (posts[post].date === dates[date]) {
        latestPosts.push(posts[post]);
      }
    }
  }
  return latestPosts;
};

export { getLatestPosts };

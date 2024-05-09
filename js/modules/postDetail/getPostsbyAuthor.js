const getPostsByAuthor = (posts, author) => {
    let keys = Object.keys(posts);
    let postsArray = keys.map((key) => ({ ...posts[key], key }));
    let postsByAuthor = postsArray.filter((post) => post.author === author);
    return postsByAuthor;
}

/* 

<h4>more from <a href="">author</a></h4>
<div>
    <a href="?key={postkey}">post-title</a>
    <div>
        <a href="">tag tag tag tag</a>
    </div>
</div>

*/

const renderPostsByAuthor = (posts, author, wrapperID) => {

    let { tags } = posts;
    let postsByAuthor = getPostsByAuthor(posts, author);
    let wrapper = document.getElementById(wrapperID);
    let authorTitle = document.createElement('h4');
    authorTitle.innerText = `More from`;
    let authorNameLink = document.createElement('a');
    authorNameLink.setAttribute('href', `../mainpage.html?author=${author}`);
    authorNameLink.innerText = author;
    authorTitle.appendChild(authorNameLink);
    wrapper.appendChild(authorTitle);
    
}

export{renderPostsByAuthor}
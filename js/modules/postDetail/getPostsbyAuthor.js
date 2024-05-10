import { createPostList } from '../mainpage/postCards.js';

const getPostsByAuthor = (posts, author) => {
    let postsArray = createPostList(posts);
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
    let postsByAuthor = getPostsByAuthor(posts, author);
    let wrapper = document.getElementById(wrapperID);
    let authorTitle = document.createElement('h4');
    authorTitle.innerText = `More from `;
    let authorNameLink = document.createElement('a');
    authorNameLink.setAttribute('href', `../mainpage.html?author=${author}`);
    authorNameLink.innerText = author;
    authorTitle.appendChild(authorNameLink);
    wrapper.appendChild(authorTitle);
    let postsWrapper = document.createElement('div');
    postsByAuthor.forEach((post) => {
        console.log(post.tags);
        console.log(post.title)
        let postLink = document.createElement('a');
        postLink.setAttribute('href', `?key=${post.key}`);
        postLink.innerText = post.title;
        postsWrapper.append(postLink);
        let textfill = ""
        post.tags.forEach((tag) => {
            textfill = textfill + "#" + tag + " ";
        });
        let tagContainer = document.createElement('div');
        let tagLink = document.createElement('a');
        tagLink.setAttribute('href', "");
        tagLink.innerText = textfill;
        tagContainer.appendChild(tagLink);
        postsWrapper.appendChild(tagContainer);

    });
    wrapper.appendChild(postsWrapper)

}

export { renderPostsByAuthor }
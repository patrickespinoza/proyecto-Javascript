/* 
 <div class="card mb-3">
    <img src="https://picsum.photos/id/20/600/900"
        class="card-img-top object-fit-cover" height="240px"="..." />
    <div class="card-body">
        <div class="author-box">
            <img src="assets/generic-avatar.jpg" />
            <div>
                <span>
                    <h6><a href="">Author</a></h6>
                </span>
                <p><a href="">date</a></p>
            </div>

        </div>
        <div class="post-title"><a href="">Title of the post</a></div>

        <div class="post-footer">
            <div><a href="">tag 1</a></div>
            <div><a href="">tag 2</a></div>
            <div><a href="">tag 3</a></div>
            <div><a href="">tag 4</a></div>
        </div>
        <div class="post-footer">
            <div><a href="">💓reactions</a></div>
            <div><a href="">5 comments</a></div>

            <span><a href="">1 minute read</a></span>
            <div>
                <a href=""><img src="assets/bookmark.svg" alt=""></a>
            </div>
        </div>
    </div>
</div> 
    */

let createFirstPostCard = (post) => {
    let { title, description, image, author, tags, date, reactions, rating, relevant } = post;
    
    let card = document.createElement("div");
    card.classList.add("card", "mb-3");
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "object-fit-cover");
    cardImage.setAttribute("src", image);
    cardImage.setAttribute("alt", title);
    cardImage.setAttribute("height", "240px");
    card.appendChild(cardImage);
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    let authorBox = document.createElement("div");
    authorBox.classList.add("author-box");
    let authorImage = document.createElement("img");
    authorImage.setAttribute("src", "assets/generic-avatar.jpg");
    authorBox.appendChild(authorImage);
    let authorInfo = document.createElement("div");
    let authorFormat = document.createElement("h6");
    let authorName = document.createElement("span");
    let authorLink = document.createElement("a");
    authorLink.setAttribute("href", "#");
    authorLink.textContent = author;
    authorName.appendChild(authorLink);
    authorFormat.appendChild(authorName);
    authorInfo.appendChild(authorFormat);
    let postDate = document.createElement("p");
    let dateLink = document.createElement("a");
    dateLink.setAttribute("href", "#");
    dateLink.textContent = date;
    postDate.appendChild(dateLink);
    authorInfo.appendChild(postDate);
    authorBox.appendChild(authorInfo);
    cardBody.appendChild(authorBox);

    let postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    let titleLink = document.createElement("a");
    titleLink.setAttribute("href", "#");
    titleLink.textContent = title;
    postTitle.appendChild(titleLink);
    cardBody.appendChild(postTitle);

    let postFooter = document.createElement("div");
    postFooter.classList.add("post-footer");
    for (let tag in tags) {
        let tagLink = document.createElement("a");
        tagLink.setAttribute("href", "#");
        tagLink.textContent = `#${tags[tag]}`;
        let tagDiv = document.createElement("div");
        tagDiv.appendChild(tagLink);
        postFooter.appendChild(tagDiv);
    }
    cardBody.appendChild(postFooter);
    let postFooter2 = document.createElement("div");
    postFooter2.classList.add("post-footer");
    let reactionsBox = document.createElement("div");
    let reactionsLink = document.createElement("a");
    reactionsLink.setAttribute("href", "#");
    reactionsLink.textContent = `💓${reactions.likes} reactions`
    reactionsBox.appendChild(reactionsLink);
    let commentsBox = document.createElement("div");
    let commentsLink = document.createElement("a");
    commentsLink.setAttribute("href", "#");
    commentsLink.textContent = `${reactions.comments} comments`;
    commentsBox.appendChild(commentsLink);
    postFooter2.appendChild(reactionsBox);
    postFooter2.appendChild(commentsBox);
    let readTime = document.createElement("span");
    let readTimeLink = document.createElement("a");
    readTimeLink.setAttribute("href", "#");
    readTimeLink.textContent = `${(Math.floor((Math.random() * 10) + 1)
    )} minute read`;
    readTime.appendChild(readTimeLink);
    postFooter2.appendChild(readTime);
    let bookmarkDiv = document.createElement("div");
    let bookmarkLink = document.createElement("a");
    let bookmarkImage = document.createElement("img");
    bookmarkImage.setAttribute("src", "assets/bookmark.svg");
    bookmarkImage.setAttribute("alt", "Bookmark");
    bookmarkLink.appendChild(bookmarkImage);
    bookmarkDiv.appendChild(bookmarkLink);
    postFooter2.appendChild(bookmarkDiv);
    cardBody.appendChild(postFooter2);
    card.appendChild(cardBody);
    return card;  

}

let createOtherPostCards = (post) => {
    let { title, description, image, author, tags, date, reactions, rating, relevant } = post;
    
    let card = document.createElement("div");
    card.classList.add("card", "mb-3");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    let authorBox = document.createElement("div");
    authorBox.classList.add("author-box");
    let authorImage = document.createElement("img");
    authorImage.setAttribute("src", "assets/generic-avatar.jpg");
    authorBox.appendChild(authorImage);
    let authorInfo = document.createElement("div");
    let authorFormat = document.createElement("h6");
    let authorName = document.createElement("span");
    let authorLink = document.createElement("a");
    authorLink.setAttribute("href", "#");
    authorLink.textContent = author;
    authorName.appendChild(authorLink);
    authorFormat.appendChild(authorName);
    authorInfo.appendChild(authorFormat);
    let postDate = document.createElement("p");
    let dateLink = document.createElement("a");
    dateLink.setAttribute("href", "#");
    dateLink.textContent = date;
    postDate.appendChild(dateLink);
    authorInfo.appendChild(postDate);
    authorBox.appendChild(authorInfo);
    cardBody.appendChild(authorBox);

    let postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    let titleLink = document.createElement("a");
    titleLink.setAttribute("href", "#");
    titleLink.textContent = title;
    postTitle.appendChild(titleLink);
    cardBody.appendChild(postTitle);

    let postFooter = document.createElement("div");
    postFooter.classList.add("post-footer");
    for (let tag in tags) {
        let tagLink = document.createElement("a");
        tagLink.setAttribute("href", "#");
        tagLink.textContent = `#${tags[tag]}`;
        let tagDiv = document.createElement("div");
        tagDiv.appendChild(tagLink);
        postFooter.appendChild(tagDiv);
    }
    cardBody.appendChild(postFooter);
    let postFooter2 = document.createElement("div");
    postFooter2.classList.add("post-footer");
    let reactionsBox = document.createElement("div");
    let reactionsLink = document.createElement("a");
    reactionsLink.setAttribute("href", "#");
    reactionsLink.textContent = `💓${reactions.likes} reactions`
    reactionsBox.appendChild(reactionsLink);
    let commentsBox = document.createElement("div");
    let commentsLink = document.createElement("a");
    commentsLink.setAttribute("href", "#");
    commentsLink.textContent = `${reactions.comments} comments`;
    commentsBox.appendChild(commentsLink);
    postFooter2.appendChild(reactionsBox);
    postFooter2.appendChild(commentsBox);
    let readTime = document.createElement("span");
    let readTimeLink = document.createElement("a");
    readTimeLink.setAttribute("href", "#");
    readTimeLink.textContent = `${(Math.floor((Math.random() * 10) + 1)
    )} minute read`;
    readTime.appendChild(readTimeLink);
    postFooter2.appendChild(readTime);
    let bookmarkDiv = document.createElement("div");
    let bookmarkLink = document.createElement("a");
    let bookmarkImage = document.createElement("img");
    bookmarkImage.setAttribute("src", "assets/bookmark.svg");
    bookmarkImage.setAttribute("alt", "Bookmark");
    bookmarkLink.appendChild(bookmarkImage);
    bookmarkDiv.appendChild(bookmarkLink);
    postFooter2.appendChild(bookmarkDiv);
    cardBody.appendChild(postFooter2);
    card.appendChild(cardBody);
    return card;  

}

//convierto el objeto posts en un array de posts
const createPostList = (posts) => {
    let postList = [];
    for (let post in posts) {
        postList.push(posts[post]);
    }
    return postList;
}
//console.log(createPostList(posts));



const printPostCards = (posts, wrapperId) => {
    let postWrapper = document.getElementById(wrapperId);
    postWrapper.appendChild(createFirstPostCard(posts[0]));
    for ( let i = 1; i < posts.length; i++) {
        postWrapper.appendChild(createOtherPostCards(posts[i]));
}}

export { createPostList, printPostCards };
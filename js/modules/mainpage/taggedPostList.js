/* 
<ul class="list-group list-group-flush"  id="random-tag-1">
    <li class="list-group-item">
        <h6>random tag 1</h6>
        <p>
            description, se genera dinamicamente a partir de la
            informacion de la base de datos, se muestran 5 items por
            tarjeta y se muestran dos tarjetas en este aside derecho
        </p>
    </li>
    <li class="list-group-item">
        <a href="">tagged post title 1</a>
        <p>${numero} comentarios</p>
    </li>
    <li class="list-group-item">
        <a href="">tagged post title 2</a>
        <p>${numero} comentarios</p>
    </li>
    <li class="list-group-item">
        <a href="">tagged post title 3</a>
        <p>${numero} comentarios</p>
    </li>
    <li class="list-group-item">
        <a href="">tagged post title 4</a>
        <p>${numero} comentarios</p>
    </li>
    <li class="list-group-item">
        <a href="">tagged post title 5</a>
        <p>${numero} comentarios</p>
    </li>
</ul>
*/

/* 
tomo la tag que quiero mostrar los posts
busco los posts que tengan esa tag en la lista de tags
creo una lista de posts que contengan dicha tag
regreso esa lista
*/
/* 
const createTaggedPostList2 = (tag, posts) => {
    let taggedPostList = {};
    for (let post in posts) {
        if (posts[post].tags.includes(tag)) {
            taggedPostList[post] = posts[post];
        }
    }
    console.log(taggedPostList);
    return taggedPostList;
} */

const createTaggedPostList = (tag, posts) => {
    let keys = Object.keys(posts);
    let taggedPostList = keys.reduce((acc, key) => {
        if (posts[key].tags.includes(tag)) {
            posts[key].key = key;
            acc[key] = posts[key];
        }
        return acc;
    }, {});
    return taggedPostList;
}

const createTaggedPostListCard = (taggedPostList) => {
    let taggedPostListContainer = document.createElement("ul");
    taggedPostListContainer.classList.add("list-group", "list-group-flush");
    for (let post in taggedPostList) {
        let postItem = document.createElement("li");
        postItem.classList.add("list-group-item");
        let postTitle = document.createElement("a");
        postTitle.setAttribute("href", `detail.html?key=${taggedPostList[post].key}`);
        postTitle.textContent = taggedPostList[post].title;
        let postComments = document.createElement("p");
        postComments.textContent = `${taggedPostList[post].reactions.comments} comentarios`;
        postItem.appendChild(postTitle);
        postItem.appendChild(postComments);
        taggedPostListContainer.appendChild(postItem);
    }
    return taggedPostListContainer;
}

const printTaggedPostList = (tag, posts, wrapperId) => {
    let postTag = document.createElement("li");
    postTag.classList.add("list-group-item");
    let postTagTitle = document.createElement("h6");
    postTagTitle.textContent = `#${tag}`
    let postTagDescription = document.createElement("p");
    postTagDescription.textContent = "muestra tags relacionados con la busqueda";
    postTag.appendChild(postTagTitle);
    postTag.appendChild(postTagDescription);

    let taggedPostList = createTaggedPostList(tag, posts);
    let taggedPostListCard = createTaggedPostListCard(taggedPostList);
    let wrapper = document.getElementById(wrapperId);
    wrapper.appendChild(postTag);
    wrapper.appendChild(taggedPostListCard);
}

export { printTaggedPostList }
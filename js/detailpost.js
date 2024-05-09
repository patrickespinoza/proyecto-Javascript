//para extraer paraametros de la url
const url = window.location.href
//instancia url
const params= new URLSearchParams(new URL(url).search)
//extraer params
let postKey = params.get("postKey")


const BASE_URL = "https://kodemia33jsluis-default-rtdb.firebaseio.com/-NxMBmOyF4ljPkmbcTQT";

const fetchPostByKey = async (postKey) => {
    let response = await fetch(`${BASE_URL}/${postKey}/.json`);
    let data = await response.json();
    return data;
  };

const printPostData = async (postKey)=> {
    let postData = await fetchPostByKey(postKey)
    console.log(postData)
    let { title, description, image, author, tags, date, reactions,}= postData

    document.getElementById("post-author").innerText = author
    document.getElementById("post-date").innerText = date
    document.getElementById("post-title").innerText = title
    document.getElementById("post-content").innerText = description
    document.getElementById("post-picture").setAttribute("src", image)
}

printPostData(postKey)
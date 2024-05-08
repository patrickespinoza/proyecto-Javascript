const BASE_URL = "https://kodemia33jsluis-default-rtdb.firebaseio.com/-NxMBmOyF4ljPkmbcTQT";

const createPost = async (postObject) => {
  let response = await fetch(`${BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(postObject),
  });
  let data = await response.json();
  return data;
};


const fetchPostByKey = async (postKey) => {
    let response = await fetch(`${BASE_URL}/${postKey}/.json`);
    let data = await response.json();
    return data;
  };
  
const fetchAllPosts = async () => {
let response = await fetch(`${BASE_URL}/.json`);
let data = await response.json();
return data;
};

const editPost = async (postKey, postObject) => {
let response = await fetch(`${BASE_URL}/${postKey}/.json`, {
    method: "PATCH",
    body: JSON.stringify(postObject),
});
let data = await response.json();
return data;
};

const deletePost = async (postKey) => {
let response = await fetch(`${BASE_URL}/${postKey}/.json`, {
    method: "DELETE",
});
let data = await response.json();
return data;
};

export { createPost, fetchPostByKey, fetchAllPosts, deletePost, editPost};
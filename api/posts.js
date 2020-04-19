import Fetch from './Fetch.js';

async function getAllPosts() {
  const posts = await Fetch.get('/posts')
  return posts
}

async function getComments(id) {
  const comments = await Fetch.get(`/posts/${id}/comments`)
  return comments
}

async function getPost(id) {
  const post = await Fetch.get(`/posts/${id}`)
  return post
}

export { getAllPosts, getComments, getPost }

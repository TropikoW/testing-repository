import axios from 'axios'

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return data
}

export default fetchPosts;
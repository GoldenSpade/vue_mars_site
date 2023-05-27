import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      posts.value = data
    } catch (err) {
      error.value = err
      console.log(error)
    }
  }

  return { posts, error, load }
}

export default getPosts

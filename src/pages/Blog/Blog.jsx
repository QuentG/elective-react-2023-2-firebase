import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Blog = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map(post => (
                    <Link to={`/blog/${post.id}`} state={{ article: post }} key={post.id}>
                        <li key={post.id}>{post.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Blog
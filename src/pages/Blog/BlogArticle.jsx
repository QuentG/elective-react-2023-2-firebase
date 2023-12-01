import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router"

const BlogArticle = () => {
    // Réception des paramètres de l'URL via <Link path={`/blog/${post.id}`}>
    const { postId } = useParams()
    // Récupération de l'état envoyé via <Link state={{ article: post }}>
    const { state } = useLocation()
    // Fonction de navigation
    const navigate = useNavigate()

    const [comments, setComments] = useState([])

    const getComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const data = await response.json()
        setComments(data)
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div>
            <h1>Blog Article n°{postId}</h1>
            <button onClick={() => navigate(-1)}>Retour</button>
            {state?.article && (
                <div>
                    <h2>Titre : </h2>
                    <p><strong>{state.article.title}</strong></p>
                    <h3>Contenu : </h3>
                    <p>{state.article.body}</p>
                </div>
            )}

            <h3>Commentaires</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h4>Email : {comment.email}</h4>
                        <p>Contenu : {comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogArticle
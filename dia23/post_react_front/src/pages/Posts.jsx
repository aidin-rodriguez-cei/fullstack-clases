import { useState, useEffect } from "react";
import "../css/Posts.css"; 

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(false);
    const [currentPostIndex, setCurrentPostIndex] = useState(0);
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState({});


    useEffect(() => {
        //getPosts("https://jsonplaceholder.typicode.com/posts");
        getPosts("http://localhost:3000/Publicaciones");
    }, []);

    const getPosts = async (url) => {
        try {
            const respuesta = await fetch(url);
            const objeto = await respuesta.json();
            console.log("Objeto vale: ", objeto);
            setPosts(objeto); 
        } catch (e) {
            console.log("Upsi, tenemos un error:", e);
        }
    };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const nextPost = () => {
        setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    };

    const previousPost = () => {
        setCurrentPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = async () => {
        const postId = posts[currentPostIndex].id;
        const commentData = {
            postId,
            body: newComment
        };

        try {
            await fetch("http://localhost:3000/Comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentData)
            });

            setComments((prev) => ({
                ...prev,
                [postId]: [...(prev[postId] || []), newComment]
            }));
            setNewComment("");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <section className="container">
            <div className="PostsGrid">
                <h3>Posts ({posts.length})</h3>
                <div className="buttons">
                    <button onClick={toggleVisibility}>
                        {visible ? 'Ocultar Posts' : 'Mostrar Posts'}
                    </button>
                </div>

                {visible && (
                    <div className="post-container">
                        <PostCard 
                            key={posts[currentPostIndex].id} 
                            id={posts[currentPostIndex].id} 
                            title={posts[currentPostIndex].title} 
                            body={posts[currentPostIndex].body} 
                        />
                        <div className="pagination">
                            <button onClick={previousPost}>&laquo; Anterior</button>
                            <button onClick={nextPost}>Siguiente &raquo;</button>
                        </div>

                        <div className="comment-section">
                            <h4>Agregar Comentario</h4>
                            <textarea
                                value={newComment}
                                onChange={handleCommentChange}
                                placeholder="Escribe tu comentario aquí..."
                            ></textarea>
                            <button onClick={handleCommentSubmit}>Agregar Comentario</button>
                            <div className="comments-list">
                                {(comments[posts[currentPostIndex].id] || []).map((comment, index) => (
                                    <p key={index}>{comment}</p>
                                ))}
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
};

const PostCard = ({ id, title, body }) => {
    return (
        <article className="card">
            <p><strong>ID:</strong> {id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
        </article>
    );
};

export default Posts;
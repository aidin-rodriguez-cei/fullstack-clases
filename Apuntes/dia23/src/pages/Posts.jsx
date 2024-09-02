import { useState, useEffect } from "react";
import "../css/Posts.css"; 

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts("https://jsonplaceholder.typicode.com/posts");
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

    return (
        <section>
            <h3>Posts ({posts.length})</h3>
            <div className="PostsGrid">
                {posts.map(post => (
                    <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
                ))}
            </div>
        </section>
    );
};

const PostCard = ({ id, title, body }) => {
    return (
        <article className="Card">
            <p><strong>ID:</strong> {id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
        </article>
    );
};

export default Posts;

import "../css/Posts.css"; 

const Home = () => {
    return (
        <section className="container">
            <div className="home-content">
                <h1>Bienvenidos al blog</h1>
                <p>Donde encontrarás artículos y noticias.</p>
                <a href="/posts" className="btn-primary">Ver Posts</a>
            </div>
        </section>
    );
};

export default Home;



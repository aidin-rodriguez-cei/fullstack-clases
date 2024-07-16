import { useState, useEffect } from "react";

const PruebasDeUseEffect = () => {
    const [cont, setCont] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [posts, setPosts] = useState([]);

    // 1. Crea un componente que muestre un mensaje en la consola cuando el componente se monte por primera vez.
    useEffect( () => {
        console.log("El componente se ha montado por primera vez");
    }, []);

    // 2. Crea un componente que registre el tiempo en segundos desde que el componente se montó. 
    useEffect( () => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // 3. Crea un componente que obtenga datos de una API y los muestre en pantalla (https://jsonplaceholder.typicode.com/posts)
    useEffect( () => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error al obtener los datos de la API:", error);
            }
        };

        obtenerDatos();
    }, []);
    
// Lo que retorna en pantalla
    return ( 
        <div>
        <p>Soy una prueba {cont}</p>
        <p>El componente ha estado montado por {seconds} segundos.</p>

        <div>
                <h3>Posts:</h3>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
    </div>
    );
}
 
export default PruebasDeUseEffect;
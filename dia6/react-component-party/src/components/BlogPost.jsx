import { getRelativeTime } from "../lib.js";

const BlogPost = ({titulo, autor, fecha, children}) => {

    const miFecha = new Date(fecha);
    const fecha2 = getRelativeTime(miFecha)
    console.log(miFecha)

    const FechaFormateada = miFecha.toLocaleDateString('es-ES', {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    //const {titulo, autor, fecha} = props;

    return (
        <article className="Card">
            <h2>{titulo}</h2>

            {/* Contenido de nuestra etiqueta */}
            {children}

            <footer>
                <b>Por:</b> {autor} <br />
                <b>Ultimo cambio:</b> {FechaFormateada} <br />
                <b>Publicado:</b> {fecha2} <br />
            </footer>
        </article>
    )

}

export default BlogPost;
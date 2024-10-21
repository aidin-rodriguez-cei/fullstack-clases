import "../css/App.css"
const TarjetaUsuario = ({edad, nombre, ocupacion}) => {

    //Descontruccion (EXTRAER)
    //const {edad, nombre, ocupacion} = props;
    //console.log(props);
    
    return(
        <div className="Card">
        <h3>Tarjeta Usuario</h3>
        <ul>
            <li><b>Nombre:</b> {nombre}</li>
            <li><b>Edad:</b> {edad}</li>
            <li><b>Ocupación:</b> {ocupacion}</li>
        </ul>
        </div>
    )
}

export default TarjetaUsuario
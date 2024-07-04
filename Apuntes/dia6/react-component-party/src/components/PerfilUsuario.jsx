
export const PerfilUsuario = ({usuario}) => {

    const {nombre, email, direccion, img} = usuario;
    const {calle, ciudad, codigoPostal} = direccion;

    return (
        <div className="Card Perfil">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <p><b>Email:</b> {email}</p>
            <p><b>Dirección:</b> {calle}, {ciudad}, {codigoPostal}</p>
        </div>
    )
}

export const papata = "Soy una patata"
export const Card = () => {

    const nombre = "Aidin";
    const edad = 40;
    const hobbies = ["Yoga", "Leer", "Bailar"]



    return (
      <>
        <h3>{nombre}</h3>
        <p>Mi edad es {edad}</p> 
        <p>Mis Hobbies son:</p>
        <ul>
            {
                hobbies.map((hobby)=>{
                    return (
                        <li>{hobby}</li>
                    )
                })
            }
        </ul>
      </>
    )
  }
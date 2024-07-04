import './css/App.css'
import TarjetaUsuario from './components/TarjetaUsuario'
import ListaTareas from './components/tareas/ListaTareas'
import "./css/App.css"

// este fue un export individual
import {PerfilUsuario} from './components/PerfilUsuario';
import GaleriaImagenes from './components/GaleriaImagenes/index.jsx';

import BlogPost from './components/BlogPost.jsx'

function App() {

// Trayendo tareas de la base de daros

const tareas = [
  {id: 23, tareas: "Crear componentes en React", isCompletada: true},
  {id: 24, tareas: "Leer un libro", isCompletada: true},
  {id: 25, tareas: "Mejorar mi nivel de Surf", isCompletada: false},
  {id: 36, tareas: "Ver series y Pelis con aire acondicionado", isCompletada: true},
]

 // PerfilUsuario  (Objeto Anidado) 
 const userData =  {
  nombre: 'El Barto',
  email: 'elbarto@fox.com',
  img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
  direccion: {
    calle: 'Calle Falsa 123',
    ciudad: 'Springfield',
    codigoPostal: '12345'
  }
};

 // Traer info de Galeria Imagenes (Array de Objetos)
  // https://rickandmortyapi.com/
  
  const imageList = [
    { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', alt: 'Rick Sanchez' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', alt: 'Morty Smith' },
    { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', alt: 'Summer Smith' },
  ];


// Imprimir en pantalla
  return (
    <>
    <h1>React Component Party</h1>
    <TarjetaUsuario nombre="Aidin" edad="34" ocupacion="Alumno"/>

    <ListaTareas listaTareas={tareas}/>
    <PerfilUsuario usuario={userData}/>
    <GaleriaImagenes lista={imageList}/>

    <BlogPost titulo="Mi primer blog" autor="Aidin" fecha="2024-07-04">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed labore nobis reiciendis amet qui vel laudantium, unde assumenda. Ipsa maxime aliquam minus quidem placeat optio repudiandae aperiam, maiores fuga delectus.</p>
    </BlogPost>
    </>
  )
}

export default App

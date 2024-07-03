import './css/App.css'
import TarjetaUsuario from './components/TarjetaUsuario'
import ListaTareas from './components/tareas/ListaTareas'
import "./css/App.css"

function App() {

// Trayendo tareas de la base de daros

const tareas = [
  {id: 23, tareas: "Crear componentes en React", isCompletada: true},
  {id: 24, tareas: "Leer un libro", isCompletada: true},
  {id: 25, tareas: "Mejorar mi nivel de Surf", isCompletada: false},
  {id: 36, tareas: "Ver series y Pelis con aire acondicionado", isCompletada: true},
]


// Imprimir en pantalla
  return (
    <>
    <h1>React Component Party</h1>
    <TarjetaUsuario nombre="Aidin" edad="34" ocupacion="Alumno"/>

    <ListaTareas listaTareas={tareas}/>
    </>
  )
}

export default App

import './App.css'
import { Formulario } from './components/Formulario'
import {LoginForm} from './components/LoginForm'
import FormularioMultiple  from './components/FormularioMultiple'

function App() {

  return (
    <>
    <div className='Card'>
    <h1>Ejemplos con useState</h1>
      <Formulario/>
    </div>

    <br />
    <br />

    <div className='Card'>
    <h1>Login</h1>
      <LoginForm/>
    </div>

    <br />
    <br />

    <div className='Card'>
    <h1>Formulario de múltiples páginas</h1>
      <FormularioMultiple/>
    </div>

    </>
    
  )
}

export default App

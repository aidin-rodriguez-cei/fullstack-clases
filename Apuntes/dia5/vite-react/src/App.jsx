import './App.css'
import {MiTarjeta, MiMensaje} from './components/MiTarjeta'
import { Card } from './components/Card'

function App() {

  const miVariable="De React"

  return (
    <>
    <h3>Mi página {miVariable}</h3>
    <p>{MiMensaje}</p>
    <MiTarjeta/>
    <Card/>
    </>
  )
}

export default App

import Tarea from "./Tarea"
const ListaTareas = ({listaTareas}) => {

    console.log(listaTareas)

    return (
        <div className="Card">
         <h1>Lista de Tareas</h1>

         {
            listaTareas.map(element => {
                const {id, tareas, isCompletada} = element;
                return (
                    <Tarea Key={id} tarea={tareas} isCompletada={isCompletada}/>
                )
            })
         }
       </div>
    )
}

export default ListaTareas; 
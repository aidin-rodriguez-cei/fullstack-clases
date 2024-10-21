const Tarea = ({tareas, isCompletada}) => {
    return(
        <div>
        <h3>Tu tarea es:</h3>
        {tareas}
        <button>Eliminar tareas</button>
        <button>Completar tareas</button>
        </div>
    )
}

export default Tarea;
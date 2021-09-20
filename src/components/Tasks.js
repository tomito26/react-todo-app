import Task from './Task'

function Tasks({tasks,onDelete}){
    console.log(tasks)
   
    return(
        <ul className="list-group-items">
            {tasks.map((task,index)=> <Task key={index} task={task} onDelete={onDelete} />)}
           
        </ul>
    )
}
export default Tasks
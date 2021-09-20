import Task from './Task'

function Tasks({ tasks,completeTask }){
    console.log(tasks)
   
    return(
        <ul className="list-group-items">
            {tasks.map((task,index)=> <Task key={index} task={task} index = {index} completeTask={completeTask} />)}
           
        </ul>
    )
}
export default Tasks

function Task({task,index,completeTask}){
    console.log(task)
    return(
        <li className="list-group-item" style={{textDecoration: task.isCompleted ? "line-through" : "" }}>
            {task.text}
            <button className="complete" onClick={() =>completeTask(index)}> complete</button>
        </li>
    )
}

export default Task
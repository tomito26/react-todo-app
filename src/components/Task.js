
function Task({task,onDelete}){
    console.log(task)
    return(
        <li className="list-group-item">
            {task.text}
            <i className="fas fa-trash-alt"></i>
        </li>
    )
}

export default Task
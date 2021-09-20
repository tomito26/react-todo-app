

function Header({dayActivity,tasks}){
    let completeTask = tasks.filter(task=>task.complete !== true)
    console.log(completeTask.length)
 
    return(
      <header>
            <div className="date">
              <span>{dayActivity}</span>
              <p>{completeTask.length > 1 ?`${completeTask.length} Active tasks`:`${completeTask.length} Active task`}</p>
            </div>
            <ul >
              <li>Incomplete Tasks</li>
              <li>Complete Task</li>
            </ul>
      </header>
    )
}


export default Header
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let today = new Date()
  let day = days[today.getDay()];
  let  month = months[today.getMonth()];
  let date  =  today.getDate();

  const dayActivity = `${day}, ${month}  ${date}`
  
  const[tasks,setTasks] = useState(
    [
      {
        text:"Learn React",
        iscomplete:false
      },
      {
        text:"Attend JavaScript Confrence",
        iscomplete:false
      },
      {
        text:"Particpate in Oracle Hackathon",
        iscomplete:false,
      },
      {
        text:"Meet the optician",
        iscomplete:false,
      },
      {
        text:"Play Fifa",
        oscomplete:false,
      }
    ]
  )
  const addTodo = text=>{ 
     const newTask = [...tasks, { text }];
     setTasks(newTask)
  }
    
  return (
    <div className="container">
      <Header dayActivity={dayActivity} tasks={tasks} />
      <TodoForm addTodo={addTodo}/>
      {tasks.length > 0 ?<Tasks tasks={tasks} /> :"No Task to show"}
    
    </div>
  );
}

export default App;

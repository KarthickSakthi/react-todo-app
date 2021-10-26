import React,{useState} from "react";
import { Input } from "..";
import style from './Todo.module.css'

const Task=({task})=>{
    return(
        <div className={style.Taskitem}>
        {task}
        </div>
    )
}
const Todo=()=>{
  const[task,setTask]=useState([]);

const addTask=taskName=>{
   const tempTaskArr=[...task,taskName]
   setTask(tempTaskArr)
}

  return(
      <div>
     <div>
          <Input addTask={addTask}/>
      </div>
      <div >
    {  task.map((task,index)=>(
         
        <Task
        key={index}
        task={task}
        />
        
      ))}
      </div>
      
      </div>
  )
}
export default Todo;
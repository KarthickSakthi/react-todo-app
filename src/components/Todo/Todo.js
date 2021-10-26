import React,{useState} from "react";
import { Input } from "..";
import style from './Todo.module.css'



const Todo=()=>{
  const[task,setTask]=useState([]);
  const Task=({task,index})=>{
    return(
        <div className={style.Taskitem}>
          <button className={style.DeleteButton} onClick={()=>RemoveTask(index)}>X</button>
       <div className={style.TaskName} style={{textDecoration:task.isCompleted?'line-through':''}}> {task.taskName} </div>
        <button className={style.DoneButton} onClick={()=>DoneTask(index)}>Completed</button>
        </div>
    )
}

const RemoveTask=index=>{
  const tempTaskArr=[...task]
  tempTaskArr.splice(index,1)
   setTask(tempTaskArr)
}
const addTask=taskName=>{
   const tempTaskArr=[...task,{taskName,isCompleted:false}]
   setTask(tempTaskArr)
}
const DoneTask=index=>{
  const tempTaskArr=[...task]
  tempTaskArr[index].isCompleted=true
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
        index={index}
        task={task}
        />
        
      ))}
      </div>
      
      </div>
  )
}
export default Todo;
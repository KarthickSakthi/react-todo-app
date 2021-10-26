import React,{useState} from "react";
import style from './Input.module.css';




const Input=({addTask})=>{
const[value,setVal]=useState("");
const handleSubmit=(event)=>{
  event.preventDefault();
     addTask(value)
     setVal("")
   
}
    return(
      <form className={style.InputField} onSubmit={handleSubmit}>
      <input required placeholder='Enter Your Task' className={style.input} value={value} type='text' onChange={(e)=>setVal(e.target.value)} />
      <button className={style.Button} type='submit'>Enter</button>
    
      </form>
    )
}
export default Input;
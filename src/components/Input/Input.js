import React,{useState} from "react";
import style from './Input.module.css';


const Input=()=>{
const[value,setVal]=useState("");
    return(
        <div className={style.InputField}>
      <input className={style.input} value={value} type='text' onChange={(e)=>setVal(e.target.value)} />
      <button className={style.Button}>Enter</button>
      </div>
    )
}
export default Input;
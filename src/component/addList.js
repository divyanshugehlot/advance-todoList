import React,{useState,useEffect} from 'react'
import * as todoActions from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AddList() {

  const [todo, setTodo] = useState("")
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const todolist = useSelector((state) => {
    return state.todos.entities;
  });

  const addTodo = ()=>{
    dispatch(todoActions.createItem({
      id:todolist.count+1,
      title:todo,
    }))
    navigate("/")
  }
  useEffect(()=>{
    dispatch(todoActions.fetchItems());
  },[])
  return (
    <div>
    <input type="text" placeholder="enter todo " className="rounded" onChange={(e)=>{
      setTodo(e.target.value)
    }}/>

    <button type="button" className="btn btn-primary btn-md rounded-circle mx-md-3" onClick={
      addTodo}>ADD</button>
    </div>
  )
}

export default AddList
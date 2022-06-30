import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";
import * as todoActions from "../redux/actions";

function List() {
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")

  const todolist = useSelector((state) => {
    return state.todos.entities;
  });
  const todosPerPage = 10;
  const pageVisited = pageNumber * todosPerPage;

  const deleteTodo = (id) => {
    dispatch(todoActions.deleteItem(id));
  };
  const updateTodo = (id) => {
    navigate("/update-todo/" + id);
  };
  const addTodo = () => {
    navigate("/add-todo")
  }
  const searchTodo = (item)=>{
    dispatch(todoActions.fetchItems(item))
    
  }

  useEffect(() => {
    dispatch(todoActions.fetchItems());
  }, []);

  return (
    <div>
      <header className="wrapper border border-light">
        {" "}
        <h1> TO DO LIST </h1>
       

        
      </header>
      <div className="wrapper-container">
        <Card className="border border-primary">
          {console.log("this", todolist)}
          {todolist ? (
            <table>
              <thead className="bg-secondary">
                <tr className="border border-dark">
                  <th className="px-md-5">S. No.</th>
                  <th className="px-md-5">To DO</th>
                  <th className="px-md-5">Actions</th>
                  <tr className="px-md-5">
                  <td>
                  
                  
                <input type="text" onChange={(e)=>{
                  setSearch(e.target.value)
                }} />
                <button
                className="btn btn-dark border border-danger btn-sm rounded-circle "
                onClick={() => {
                  searchTodo(search)
                }}
              >search</button>
                </td>
                <td>
                <button
                  className="btn btn-warning btn-sm rounded-circle mx-md-5"
                  onClick={() => {
                    addTodo();
                  }}
                >ADD</button>
                </td>
                </tr>
                </tr>
              </thead>
              <tbody>
                {todolist
                  .slice(pageVisited, pageVisited + todosPerPage)
                  .map((todo) => (
                    <tr className="border border-primary" key={todo.id}>
                      <td className="border border-dark px-md-5">{todo.id}</td>
                      <td className="px-md-5">{todo.title}</td>

                      <button
                        className="btn btn-success btn-sm rounded-circle"
                        onClick={() => updateTodo(todo.id)}
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm rounded-circle mx-md-5"
                        onClick={() => {
                          deleteTodo(todo.id);
                        }}
                      >
                        delete
                      </button>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <p>No Record</p>
          )}
          <div className="container d-flex justify-content-between bg-secondary">
            <button
              className="btn btn-danger btn-lg rounded-circle"
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            >
              {" "}
              PREV{" "}
            </button>
            <button
              className="btn btn-warning btn-lg rounded-circle"
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            >
              {" "}
              NEXT
            </button>
           
          </div>
        </Card>
      </div>
    </div>
  );
}

export default List;

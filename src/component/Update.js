import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as todoActions from "../redux/actions";

function Update() {
  const [updateTodo, setUpdateTodo] = useState("");
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter To-do "
        onChange={(e) => {
          setUpdateTodo(e.target.value);
        }}
      />

      <button
        className="btn btn-primary mx-md-5 btn-sm "
        onClick={() => {
          dispatch(
            todoActions.updateItem({
              id: params?.id,
              title: updateTodo,
            })
          );

          navigate("/");
        }}
      >
        updateTodo
      </button>
    </div>
  );
}

export default Update;

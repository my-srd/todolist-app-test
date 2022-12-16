import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import "./TodoForm.css";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo  } from "../redux/action";
import EditTodoForm from "./EditTodoForm";

const AddTodoForm = ({ chageForm,editTodoTxt,handleCancelEditform }) => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");
  const [editTodoValue, setEditTodoValue] = useState('');

  useEffect(() => {
    setEditTodoValue(editTodoTxt.todo)
  }, [editTodoTxt])
  
  
  const handleValueChange = (e) => {
    setTodoValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let todoSend = {
      id: Math.floor(Math.random() * 100),
      todo: todoValue,
      completed: false,
    };
    console.log(todoSend);
    setTodoValue("");
    dispatch(addTodo(todoSend));
  };
  const handleValueEditChange = (e) => {
    setEditTodoValue(e.target.value);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editTodoValue)
    let todoEditSend = {
      id: editTodoTxt.id,
      todo: editTodoValue,
      completed: editTodoTxt.completed,
    };
    console.log(todoEditSend);
    setEditTodoValue("");
    dispatch(updateTodo(todoEditSend));
    handleCancelEditform();
  };

 

  return (
    <div>
      {chageForm === false ? (
        <form className="addInput" onSubmit={handleSubmit}>
          <div>
            <TextField
              id="standard-basic"
              label="add todolist"
              variant="standard"
              value={todoValue}
              onChange={handleValueChange}
              required
              sx={{ m: 1, width: "50ch" }}
            />
          </div>
          <div className="pl-2">
            <Button type="submit" variant="contained">
              Add todo
            </Button>
          </div>
        </form>
      ) : (
       <div className="d-flex">
         <form className="addInput" onSubmit={handleEditSubmit}>
          <div>
            <TextField
              id="standard-basic"
              label="edit todolist"
              variant="standard"
              value={editTodoValue||" "}
              onChange={handleValueEditChange}
              required
              sx={{ m: 1, width: "50ch" }}
            />
          </div>
          <div className="pl-2">
            <Button type="submit" variant="contained">
              Update Todo
            </Button>
           
          </div>
         
        </form>
         <div className="pl-2">
         <Button  variant="outlined" onClick={()=>handleCancelEditform()}>
             BACK
           </Button>
         </div>
       </div>
      )}
    </div>
  );
};

export default AddTodoForm;

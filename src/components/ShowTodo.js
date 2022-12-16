import { Button, Checkbox } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateCheckboxTodo } from "../redux/action";
import "./ShowTodo.css";
const ShowTodo = ({ handleEditform, chageForm, handleCancelEditform }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todolist.todo);
    //   console.log(todos);

    const exitTodo = (todo) => {
        // dispatch(deleteTodo(doto.id))
        // if (todos.filter(item => item.id === text.id).length > 0) {
        //     console.log(text.id);
        //     dispatch(deleteTodo(text.id))
        //     // return true;
        //   }
        // console.log(text.id);
        dispatch(deleteTodo(todo));
        //   return false;
    };


    return (
        <div className="Showtodolist">
            <h2> Todo show</h2>
            {todos.map((todo) => (
                <div key={`showlist` + todo.id} className={todo.completed === true ? "showlist done" : "showlist"}>
                    {chageForm === false ? (
                        <>

                            <Checkbox
                                key={`checkbox` + todo.id}
                                checked={todo.completed}
                                onChange={() => dispatch(updateCheckboxTodo(todo))}
                            />
                            <span key={`status` + todo.id}>
                                {todo.completed === true ? <span>done</span> : <></>}
                            </span>
                            <span key={`txt` + todo.id} className="showtxt">
                                {todo.todo}
                            </span>
                        </>
                    ) : (
                        <></>
                    )}


                    {chageForm === false ? (
                        <>
                            <Button
                                type="button"
                                key={`update` + todo.id}
                                onClick={() => handleEditform(todo)}
                            >
                                EDIT
                            </Button>
                            <Button
                                type="button"
                                key={`del` + todo.id}
                                onClick={() => exitTodo(todo)}
                            >
                                DELETE
                            </Button>
                        </>
                    ) : (
                        <>
                            {/* <Button
                                type="button"
                                key={`cc` + todo.id}
                                onClick={() => handleCancelEditform()}
                            >
                                CANCEL
                            </Button> */}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ShowTodo;

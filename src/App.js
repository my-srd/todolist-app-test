
import { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/TodoForm";
import ShowTodo from "./components/ShowTodo";
import { useSelector } from "react-redux";
function App() {
  const todo = useSelector((state) => state.todolist.todo);
  const [chageForm, setChageForm] = useState(false)
  const [editTodoTxt, setEditTodoTxt] = useState("")

  const handleEditform = (todo) => {
    setChageForm(true)
    setEditTodoTxt(todo)

  }
  const handleCancelEditform = () => {
    setChageForm(false)

  }
  const handleUpdateform = () => {
    setChageForm(false)

  }
  return (
    <div className="App">
      <h1>TODOLIST APP</h1>
        <AddTodoForm chageForm={chageForm} handleCancelEditform={handleCancelEditform} editTodoTxt={editTodoTxt} handleUpdateform={handleUpdateform}/>
        <ShowTodo handleEditform={handleEditform} chageForm={chageForm} handleCancelEditform={handleCancelEditform}/>

    </div>
  );
}

export default App;

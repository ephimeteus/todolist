import './App.css'
import ToDoList from '../components/ToDoList'
import AddToDo from "../components/AddToDo.jsx"
import { useState } from 'react';
import logo from './assets/logo.jpg';


function App() {
  const [toDos, setToDos] = useState([]);
  
  const createToDo = text => {
    let newToDo = { id: crypto.randomUUID(), text: text };
    setToDos( [...toDos,newToDo] );
  };
  
  const deleteToDo = (delId) => {
    const updateToDos = [...toDos];
    let filteredToDoes = updateToDos.filter(toDo => toDo.id !== delId);
    setToDos(filteredToDoes);
  };
  
  return (
    <>
      <img src={ logo } alt='Logo'></img>
      <h1>Ｔｏ－Ｄｏ░　一覧 </h1>
      <AddToDo createToDo= { createToDo }/>
      <ToDoList toDos= { toDos } deleteToDo= { deleteToDo } />
    </>
  );
};

export default App

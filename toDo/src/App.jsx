import './App.css'
import ToDoList from '../components/ToDoList'
import AddToDo from "../components/AddToDo.jsx"
import { useState } from 'react';



function App() {
  const [toDos, setToDos] = useState([]);
  
  const createToDo = text => setToDos( [...toDos,text] )
 
  const deleteToDo = (index) => {
    const updatedToDos = [...toDos];
    updatedToDos.splice(index, 1);
    setToDos(updatedToDos);
  };
  
  return (
    <>
      <h1>Hyper Task Lister 3000</h1>
      <AddToDo createToDo= { createToDo }/>
      <ToDoList toDos= { toDos } deleteToDo= { deleteToDo } />
    </>
  );
};

export default App

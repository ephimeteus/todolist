import ToDo from "./ToDo";

function ToDoList({ toDos, deleteToDo }) {
    return (
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDo description={toDo.text}/>
            <button className= "button" onClick={() => deleteToDo(toDo.id)}> </button>
          </li>
        ))}
      </ul>
    );
  }

export default ToDoList;

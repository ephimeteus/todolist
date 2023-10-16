import ToDo from "./ToDo";

function ToDoList({ toDos, deleteToDo }) {
    return (
      <ul>
        {toDos.map((text, index) => (
          <li key={index}>
            <ToDo description={text}/>
            <button className= "button" onClick={() => deleteToDo(index)}> x </button>
          </li>
        ))}
      </ul>
    );
  }

export default ToDoList;
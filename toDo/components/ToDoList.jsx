import ToDo from "./ToDo";

function ToDoList({ toDos, deleteToDo }) {
    return (
        <div>
            {toDos.map(
                (text, index) => ( <ToDo key={index} description={text} deleteToDo={deleteToDo}/> )
            )}
      </div>
    );
};

export default ToDoList;
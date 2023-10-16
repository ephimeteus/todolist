import { useState } from 'react';


function AddToDo ({ createToDo }) {

    const [text, setText] = useState("");
   
    const  handleChange = e => setText(e.target.value);
      
    const handleSubmit = e => {
        e.preventDefault();
        createToDo(text);
        setText('');
      };
    
    return (
        <>
            <form id="newToDoForm">
                <div className="form-section">
                    <label htmlFor="new-toDo">To do:</label>
                    <textarea id="new-toDo" rows="4" cols="20" required value= { text } onChange={ handleChange }></textarea>
                </div>
                <button onClick={ handleSubmit } className="button" id='addButton'> + </button>
            </form>
        </>
    );
};

export default AddToDo;

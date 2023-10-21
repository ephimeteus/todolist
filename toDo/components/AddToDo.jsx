import { useState } from 'react';


function AddToDo({ createToDo }) {

  const [text, setText] = useState("");

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    createToDo(text);
    setText('');
  };

  return (
    <div className='add-todo'>
      <form id="newToDoForm">
        <div className="form-section">
          <label htmlFor="new-toDo"></label>
          <textarea id="new-toDo" rows="2" cols="20" required value={text} onChange={handleChange} placeholder='Input task...'></textarea>
        </div>
        <button onClick={handleSubmit} className="button" id='addButton'></button>
      </form>
    </div>
  );
};

export default AddToDo;

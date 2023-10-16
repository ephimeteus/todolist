function ToDo ({ description, deleteToDo }) {
    return(
        <div className="toDo">
            <div className="toDo-upper-section"></div>
            <div className="toDo-lower-section">
                <p>{ description }</p>
            <button className="button" onClick={ deleteToDo }> Delete </button>
            </div>
        </div>
        
    );
};

export default ToDo;
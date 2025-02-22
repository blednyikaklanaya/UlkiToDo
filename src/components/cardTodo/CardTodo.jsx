/* eslint-disable react/prop-types */
import "./cardTodo.css";

function CardTodo({ nameTodoCard, id, onDelete}) {

    return (
        <>
            <div className="todo-card">
                <span className="name-todo">{nameTodoCard}</span>
                <button onClick={() => onDelete(id)} className="button-delete">X</button>
            </div>
        </>
    )
}

export default CardTodo
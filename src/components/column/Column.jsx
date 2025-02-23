/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

import "./column.css";

import CardTodo from "../cardTodo/CardTodo";

function Column({ nameColumn }) {
    const [cardTodos, setCardTotdo] = useState([]);

    const [inputTodoValue, setInputTodoValue] = useState("");

    useEffect(() => {
        axios.get("http://ulkiorapi.atwebpages.com/todo-app/getTodos.php")
            .then(responce => {
                setCardTotdo(responce.data);
            })
            .catch(error => {
                console.error("Error at time of loading data: ", error);
            })
    }, [])

    
    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = {id: Date.now(), text: inputTodoValue};
        setCardTotdo([...cardTodos, newTodo]);
        setInputTodoValue("");
    }

    const deleteTodo = (id) => {
        setCardTotdo(cardTodos.filter(todo => todo.id != id));
    }

    return (
        <>
            <div className="column-block">
                <div>
                    <h2 className="name-label-column">{nameColumn}</h2>

                    <div className="cards-todo-block">
                        {cardTodos.map((todo) => (
                            <CardTodo key={todo.id} id={todo.id} onDelete={deleteTodo} nameTodoCard={todo.text}/>
                        ))}
                    </div>
                </div>

                <div className="adding-editing-block">

                    <div className="adding-div">
                        <form onSubmit={addTodo} className="column-form-add-todo">
                            <input value={inputTodoValue} onChange={(e) => setInputTodoValue(e.target.value)} type="text" className="set-label-todo"/>
                            <button type="submit" className="add-todo-button">+</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Column
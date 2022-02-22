import React, { useState, useEffect } from "react";
import Item from "./Item";

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            task: "Pay Bills",
            completed: false
        },
        {
            id: Math.random(),
            task: "Go Shopping",
            completed: false
        },
        {
            id: Math.random(),
            task: "See the Doctor",
            completed: true
        },
    ])

    const [todo, setTodo] = useState("");

    useEffect(() => {
        if (localStorage.items) {
            setTodos(JSON.parse(localStorage.getItem("items")));
        } else {
            setTodos([]);
        }
    }, []);
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo === "") {
            return;
        }
        let todoObject = {
            task: todo,
        };
        localStorage.setItem("items", JSON.stringify([...todos, todoObject]));
        setTodos([...todos, todoObject]);
        setTodo("");
    };

    const completedTodo = (index) => {
        const newList = todos.map((list) => {
            if (list.id === index) {
                list.completed = !list.completed;
            }

            return list;
        });
        localStorage.setItem("items", JSON.stringify(newList));
        setTodos(newList);
    };

    return (
        <div className="todo">
            {" "}
            <div className="body">
                {" "}
                <h3>Add item</h3>
                <div className="todo-form">
                    {" "}
                    <form className='todo_form' onSubmit={handleSubmit}>
                        <input
                            className='input-add'
                            type="text"
                            value={todo}
                            name="todo"
                            onChange={handleChange}
                        />
                        <button className='btn-add' type="submit">Add</button>
                    </form>
                </div>
                <div>
                    {todos.length > 0 ? (
                        <div className="todo-box">
                            <h3>Todo</h3>
                            {todos.map((todoItem) => {
                                return (
                                    <Item
                                        todoItem={todoItem}
                                        completedTodo={completedTodo}
                                        setTodos={setTodos}
                                        todos={todos}
                                        key={todoItem.id}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div>You have no todos</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todo;
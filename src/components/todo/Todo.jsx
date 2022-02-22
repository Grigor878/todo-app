import React, { useState } from 'react';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoLIst from './TodoLIst';

function Todo() {

    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: "Pay Bills",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Go Shopping",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "See the Doctor",
            isCompleted: true
        },
    ])

    return (
        <div className='todo'>
            <h3>Add item</h3>
            <TodoForm onAdd={(text) => {
                setTodos([
                    ...todos,
                    {
                        id: Math.random(),
                        text: text,
                        isCompleted: false
                    }
                ])
            }} />
            <h3>Todo</h3>
            <TodoLIst
                todos={todos}
                onDelate={(todo) => {
                    setTodos(todos.filter((t) => t.id !== todo.id))
                }}
                onChange={(newTodo) => {
                    setTodos(todos.map((todo) => {
                        if (todo.id === newTodo.id) {
                            return newTodo;
                        }
                        return todo;
                    }));
                }}
            />
            <h3>Completed</h3>
            <TodoFooter
                todos={todos} onClearCompleted={() => {
                    setTodos(todos.filter((todo) => !todo.isCompleted));
                }} />
        </div>
    );
}

export default Todo;

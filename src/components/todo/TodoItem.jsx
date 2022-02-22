import React from 'react';

function TodoItem({ todo, onChange, onDelate }) {

    return (
        <div className='todo_item'>
            <div>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        })
                    }} />
                <span>{todo.text}</span>
            </div>
            <div className='btns'>
                <button
                    className='btn-delete'
                    disabled={todo.isCompleted}
                    onClick={() => {
                        onDelate(todo)
                    }}>Delate</button>
            </div>
        </div>
    );
}

export default TodoItem;

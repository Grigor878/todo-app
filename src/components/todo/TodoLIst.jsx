import React from 'react';
import TodoItem from './TodoItem';

function TodoLIst({ todos, onChange, onDelate }) {

    return (
        <div className='todo_list'>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChange={onChange}
                            onDelate={onDelate}
                        />
                    )
                })
            }
        </div>
    );
}

export default TodoLIst;

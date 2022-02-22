import React, { useState } from 'react';

function TodoForm({ onAdd }) {

    const [text, setText] = useState("")

    return (
        <form className='todo_form' onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("")
        }}>
            <input className='input-add' type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button className='btn-add'>Add</button>
        </form>
    );
}

export default TodoForm;

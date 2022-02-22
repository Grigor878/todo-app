import React from 'react';

function TodoFooter({ todos}) {


    let completedSize = todos.filter((todo) => todo.isCompleted);
    const maped = completedSize.map(el => (
        <p key={el.id}>{el.text}</p>
    ))

    return (
        <div className='todo_footer'>
            <div>{maped}</div>
        </div>
    );
}

export default TodoFooter;

import React from 'react';

const task = (props) => {
    const task = props.task;

    return (
        <div>
            <h4>{task.task}</h4>
        </div>
    );
}

export default task; 
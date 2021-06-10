import React from 'react';
import { useDispatch } from 'react-redux';

const task = (props) => {
    
    const task = props.task;
    const dispatch = useDispatch();

    return (
        <div>
            <h4>{task.task}</h4>
            <button onClick={() => dispatch({ type: 'DELETE', payload: task.id })}>Delete</button>
        </div>
    );
}

export default task; 
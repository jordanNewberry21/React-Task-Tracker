import React from 'react';
import Task from '../task/task';
import { useDispatch, useSelector } from 'react-redux';

const TaskList = () => {
    // Hooks
    const tasks = useSelector(state => state.tasks);

    return (
        <div>
            <h3>
                The List
            </h3>
            <ul>
                {tasks.map((task) => (
                    <li><Task task={task} key={task.id} /></li>
                ))}
            </ul>
        </div>
    );

}

export default TaskList;
import React from 'react';
import Task from '../task/task';
import { useDispatch, useSelector } from 'react-redux';

const TaskList = () => {
    // Hooks
    const tasks = useSelector(store => store.tasks);

    return (
        <div>
            <h3>
                The List
            </h3>
            {/* {tasks.map(task => (
                <Task task={task} key={task.id} />
            ))} */}
        </div>
    );

}

export default TaskList;
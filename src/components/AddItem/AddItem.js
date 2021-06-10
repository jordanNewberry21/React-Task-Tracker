import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItem = () => {
    const [postData, setPostData] = useState({ task: '' });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.prevent.default();
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="addTaskInput">
                <input id="addTaskInput" type="text" 
                    onChange={(e) => setPostData({ task: e.target.value })} />
            </label>
            <button type="submit">
                Add Task
            </button>
        </form>
    ); 
}

export default AddItem;
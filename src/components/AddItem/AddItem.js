import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItem = () => {
    const [postData, setPostData] = useState({ task: '' });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.prevent.default();
        dispatch({ type: 'POST', payload: postData });
    }

    return (
        <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="addTaskInput">
                What ya gotta do?
            </label><br />
            <input id="addTaskInput" type="text" 
                onChange={(e) => setPostData({ task: e.target.value })} />
            <button type="submit">
                Add Task
            </button>
        </form>
        <div>
            {JSON.stringify(postData)}
        </div>
        </div>
    ); 
}

export default AddItem;
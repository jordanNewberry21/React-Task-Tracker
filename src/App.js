import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import TaskList from './components/TaskList/TaskList';
import AddItem from './components/AddItem/AddItem';

function App() {
  // Hooks
  const dispatch = useDispatch();

  // useEffect to fetch task list
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL' });
  }, [dispatch]);

  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">
          Daily Task Tracker
        </h1>
        <section>
          <AddItem />
        </section>
        <section>
          <TaskList />
        </section>
      </header>
    </div>
  );
}

export default App;

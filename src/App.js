import React from 'react'
import { TaskList } from './components/TaskList';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { AddTask } from './components/AddTask';
import { useState } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <main>

        <AddTask tasks={tasks} setTasks={setTasks} />

        <TaskList title="Random" tasks={tasks} setTasks={setTasks} />

        <Counter />
      </main>
    </>
  )
}

export default App;

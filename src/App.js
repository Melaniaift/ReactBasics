import React from 'react'
import { TaskList } from './components/TaskList';
import { Header } from './components/Header';
import { Counter } from './components/Counter'

export const App = () => {
  return (
    <>
      <Header />
      <Counter />
      <TaskList title="Random" />
    </>
  )
}

export default App;

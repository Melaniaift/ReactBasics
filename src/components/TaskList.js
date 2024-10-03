import React from 'react';
import { useState } from 'react';
import './TaskList.css';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import { AddTask } from './AddTask';

export const TaskList = (props) => {
    const [tasks, setTasks] = useState([
        { id: 1443, name: "Record Lectures", completed: false },
        { id: 3334, name: "Edit React Lectures", completed: true },
        { id: 1543, name: "Watch Lectures", completed: false }]);

    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => id !== task.id));

    }
    return (
        <div className="task-container">
            <h1 style={{ color: "#be3434" }}>Task List {props.title}</h1>
            <AddTask />
            <ul className="task-list">
                {tasks.length > 0 && (
                    <button onClick={() => setShow(!show)}>Toggle</button>
                )
                }
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                ))}
            </ul>

            <BoxCard result="success">
                <p className="little">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, suscipit?</p>
            </BoxCard>
            <BoxCard result="warning">
                <p className="little">Lorem ipsum dolor sit amet.</p>
            </BoxCard>
        </div>
    )
}

import React from 'react';
import { useState } from 'react';
import './TaskList.css';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = ({title, tasks, setTasks}) => {

    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => id !== task.id));

    }
    return (
        <div className="task-container">
            <h1 style={{ color: "#be3434" }}>Task List {title}</h1>
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

import React from 'react'

export const TaskCard = ({task, handleDelete}) => {
    return (
        <>
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <span className={`task-name ${task.completed ? 'completed' : ''}`}>{task.id} - {task.name}</span>
                <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
        </>
    )
}

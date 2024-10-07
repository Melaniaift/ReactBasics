import React, { useState, useRef } from 'react';
import "./AddTask.css"

export const AddTask = ({ tasks, setTasks }) => {
    // const [taskValue, setTaskValue] = useState("");
    const taskRef = useRef("");
    const [progress, setProgress] = useState(false);

    const handleReset = () => {
        // setTaskValue("");
        taskRef.current.value = ""
        setProgress(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task])
        handleReset();
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <label htmlFor='task'>Task Name:</label>
                <br />
                <input type="text" name="task" id="task" placeholder='Task Name' autoComplete='off' ref={taskRef} />
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <span onClick={handleReset} className='reset'>Reset</span>
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}

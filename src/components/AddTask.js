import React, { useState } from 'react'

export const AddTask = () => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (e) => {
        setTaskValue(e.target.value)
    }

    const handleReset = () => {
        setTaskValue("");
        setProgress(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.error(task)
        handleReset();
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <label htmlFor='task'>Task Name:</label>
                <br />
                <input onChange={handleChange} type="text" name="task" id="task" placeholder='Task Name' autoComplete='off' value={taskValue} />
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <span onClick={handleReset} className='reset'>Reset</span>
                <button type="submit">Add Task</button>

            </form>
            <p>{taskValue}</p>
        </section>
    )
}

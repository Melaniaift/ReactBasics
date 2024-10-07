import { useState } from 'react';
import './Counter.css';

export const Counter = () => {
    let [count, setCount] = useState(0);

    function handleSub() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }
    return (
        <div className='box'>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className='add'>Add</button>
            <button onClick={handleSub} className='sub'>Substract</button>
            <button onClick={reset} className='reset'>Reset</button>
        </div>
    )
}

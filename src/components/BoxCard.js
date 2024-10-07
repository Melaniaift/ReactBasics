import React, { useState } from 'react'
import './BoxCard.css'

export const BoxCard = ({ result, children }) => {
    const [show, setShow] = useState(true);

    function hide() {
        setShow(!show);
        console.error(show)
    }
    return (
        <div className='boxcard'>
            {
                show &&
                <div className={`box ${result}`}>
                    {children}
                </div>
            }

            <button onClick={hide} className="trigger">{!show ? 'Show' : 'Hide'}</button >

        </div>
    )
}

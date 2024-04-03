import { useState } from 'react';

export const Counter = () => {
    const[amount, setAmount]  = useState(0)

    return(
        <div>
            <button onClick = {() => setAmount(amount - 1)} disabled = {amount === 0}>
                -
            </button>
            <button onClick = {() => setAmount(amount + 1)} disabled = {amount === 5}>
                +
            </button>
        </div>
    )
}
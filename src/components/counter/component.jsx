
import { useCount } from '../../hooks/use-count.js';

export const Counter = () => {
    const[amount, increment, decrement]  = useCount(0)

    return(
        <div>
            <button onClick = {() => decrement()} disabled = {amount === 0}>
                -
            </button>
            {amount}
            <button onClick = {() => increment()} disabled = {amount === 5}>
                +
            </button>
        </div>
    )
}
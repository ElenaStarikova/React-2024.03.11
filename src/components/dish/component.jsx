import { useState } from "react";
import { Counter } from '../calculator/component';
import { useCurrentUser } from "../../contexts/user.js"
import styles from './styles.module.scss';
import classNames from 'classnames'

export const Dish = ({dishId, className}) => {
    const dish = useSelector(
        (state) => state.dish.entities[dishId]
    )
    // const dish = useSelector(state)
    // console.log(dish)
    // const [amount, setAmount] =useState(0);
    // const { user } = useCurrentUser();
    return(
        <div className={classNames(styles.root, className)}>
            {dish.name}
            {!!user && <Counter value={amount} onChange={setAmount}/>}
        </div>
    )
};
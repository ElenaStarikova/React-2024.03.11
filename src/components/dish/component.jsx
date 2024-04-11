import { useState } from "react";
import { Counter } from '../calculator/component';
import { useCurrentUser } from "../../contexts/user.js"
import styles from './styles.module.scss';
import classNames from 'classnames'

export const Dish = ({dish, className}) => {
    const [amount, setAmount] =useState(0);
    const { user } = useCurrentUser();
    return(
        <div className={classNames(styles.root, className)}>
            {dish.name}
            {!!user && <Counter value={amount} onChange={setAmount}/>}
        </div>
    )
};
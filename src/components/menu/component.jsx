import { Dish } from '../dish/component';
import styles from "./styles.module.scss";

export const Menu = ({dishIds}) => {
    
    return (
        <div className={styles.root}>
            {dishIds.map((dishId) => (
                <Dish dishId = {dishId} className={styles.dish}/>                              
            ))}
        </div>
    )
};
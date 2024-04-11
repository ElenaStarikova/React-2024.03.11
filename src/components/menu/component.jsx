import { Dish } from '../dish/component';
import styles from "./styles.module.scss";

export const Menu = ({menu}) => {
    
    return (
        <div className={styles.root}>
            {menu.map((dish) => (
                <Dish dish = {dish} className={styles.dish}/>                              
            ))}
        </div>
    )
};
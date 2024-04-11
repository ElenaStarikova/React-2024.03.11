import {Tab} from "../tab/component";
import styles from './styles.module.scss';

export const RestarauntTabs = ({ restaurants, onTabClick, currentIndex}) => {
    return (
        <div className={styles.root}>
            {restaurants.map((restaurant, index) => (
                <Tab
                title={restaurant.name}
                isActive={index===currentIndex}
                onClick={() => onTabClick(index)}
                // disabled={isActive}
                />
            ))}
        </div>
    )
    
}
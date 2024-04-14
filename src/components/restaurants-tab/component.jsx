import {RestaurantTab} from "../tab/component";
import { useSelector } from "react-redux";
import styles from './styles.module.scss';

export const RestarauntTabs = ({ onTabClick, currentRestaurantId}) => {
    const restaurantIds = useSelector((state) => state.restaurant.ids)
    return (
        <div className={styles.root}>
            {restaurantIds.map((id) => (
                <RestaurantTab
                    isActive={id===currentRestaurantId}
                    onClick={() => onTabClick(id)}
                // disabled={isActive}
                />
            ))}
        </div>
    )
    
}
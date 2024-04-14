import {RestaurantTab} from "../tab/component";
import { useSelector } from "react-redux";
import styles from './styles.module.scss';

export const RestarauntTabs = ({ onTabClick, currentRestaurantid}) => {
    const restaurantIds = useSelector((state) => state.restaurant.ids)
    return (
        <div className={styles.root}>
            {restaurantIds.map((restaurantid) => (
                <RestaurantTab
                restaurantid={restaurantid}
                isActive={restaurantid===currentRestaurantid}
                onClick={() => onTabClick(restaurantid)}
                // disabled={isActive}
                />
            ))}
        </div>
    )
    
}
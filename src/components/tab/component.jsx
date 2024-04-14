import styles from './styles.module.scss';
import { Button } from '../button/component.jsx';
import { useSelector } from 'react-redux';


export const RestaurantTab = ({ restaurantid, isActive, onClick }) => {
    const restaurant = useSelector(state => state.restaurant.entities[restaurantid])

    if (!restaurant) {
        return null;
    }

    return (
        <Button
            onClick={onClick} 
            disabled={isActive}
            className={styles.tabButton}
        >
        {restaurant?.name}
        </Button>
    )
}
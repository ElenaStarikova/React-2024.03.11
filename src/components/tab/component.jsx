import styles from './styles.module.scss';
import { Button } from '../button/component.jsx';
import { useSelector } from 'react-redux';


export const RestaurantTab = ({ restaurantId, isActive, onClick }) => {
    const restaurant = useSelector(state => state.restaurant.entities[restaurantId])

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
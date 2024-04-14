
import { useState } from "react";
import { Restaurant } from '../restaurant/component.jsx';
import { RestarauntTabs } from '../restaurants-tab/component.jsx';
import { getStorageItem, setStorageItem } from '../../utils/storage.js';
import styles from './styles.module.scss';


const ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY = 'currentRestaurantIndex'

export const Restaurants = () => {
    
        //   useState() передается функция, чтобы вызываться только 1 раз на маунте, если сразу поставить в () значение будет обновляться при каждом рендере
        const [currentRestaurantId, setCurrentRestaurantId] = useState(() =>
            Number(getStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY))
        )
        // const currentRestaurant = currentRestaurantId
    return (
        <>
           <RestarauntTabs                              
                    onTabClick = {(id) => {
                        setCurrentRestaurantId;
                        setStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY, id);
                    }}
                    // currentId = {currentRestaurantId}
                    className={styles.left}
                />
                {currentRestaurantId ? (
                <Restaurant restaurant = {currentRestaurantId} />)
                : (<span>SelectRestaurant</span>)
                } 
        </>
    )
}
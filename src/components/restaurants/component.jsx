
import { useState } from "react";
import { Restaurant } from '../restaurant/component.jsx';
import { RestarauntTabs } from '../restaurants-tab/component.jsx';
import { getStorageItem, setStorageItem } from '../../utils/storage.js';
import styles from './styles.module.scss';


const ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY = 'currentRestaurantIndex'

export const Restaurants = () => {
    
        //   useState() передается функция, чтобы вызываться только 1 раз на маунте, если сразу поставить в () значение будет обновляться при каждом рендере
        const [currentRestaurantid, setCurrentRestaurantid] = useState(() =>
            Number(getStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY))
        )
        const currentRestaurant = currentRestaurantid
    return (
        <>
           <RestarauntTabs                              
                    onTabClick = {(id) => {
                        setCurrentRestaurantid;
                        setStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY, id);
                    }}
                    currentId = {currentRestaurantid}
                    className={styles.left}
                />
                {currentRestaurant ? (
                <Restaurant restaurant = {currentRestaurant} />)
                : (<span>SelectRestaurant</span>)
                } 
        </>
    )
}
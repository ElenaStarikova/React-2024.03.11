import { useState } from "react";
import { restaurants } from './constants/mock.js';
import { Restaurant } from './components/restaurant/component.jsx';
import { Layout } from "./components/layout/component.jsx";
import {RestaurantTabs} from './components/restaurant-tabs/component.jsx';
import { getStorageItem, setStorageItem } from './utils/storage.js';

const CURRENT_RESTAURANT_INDEX_STORAGE_KEY = 'currentRestaurantIndex';

export const App = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() =>
        Number(getStorageItem(CURRENT_RESTAURANT_INDEX_STORAGE_KEY))
    )
    const currentRestaurant = restaurants[currentRestaurantIndex]

    return(
        <Layout>
            <RestaurantTabs 
                restaurants = {restaurants}
                onTabClick={(index) => {
                    setCurrentRestaurantIndex(index);
                    setStorageItem(CURRENT_RESTAURANT_INDEX_STORAGE_KEY, index);
                }}
                currentIndex = {currentRestaurantIndex}
            />
            {currentRestaurant ? (
               <Restaurant  restaurant = {restaurants[currentRestaurant]} />
                ) : (
                    <span>SelectRestaurant</span>
                )
            } 
            
             
        </Layout>
    )
     
}
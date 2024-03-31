import { Tab } from '../tab/component';


export const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) => {
    return (
        <div>
            <div>
                {restaurants.map((restaurant, index) => {
                    return (
                        <Tab 
                            title = {restaurant.name}
                            isActive = {index === currentIndex}
                            onClick = {onTabClick}
                        />
                    );
                })}
            </div>
        </div>
    )
}
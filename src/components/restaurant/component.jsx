import { Reviews } from '../reviews/component';
import { Menu } from '../menu/component';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurantId }) => {
    
    
    const restaurant = useSelector(state => state.restaurant.entities[restaurantId])

    if(!restaurant) {
        return null
    }

    const { name,  menu, reviews} = restaurant 
  console.log(menu, reviews)
    return (
       
        <div>
            <h2>{name}</h2>
            <div>
                <h3>Menu</h3>
                <Menu dishIds={menu} />
            </div>
            <div>
                <h3>Reviews</h3>
                <Reviews reviewIds={reviews} />
            </div>
        </div>

        // <div className={styles.root}> 
        //    <div className={styles.title}>{name ? name : "NoName"}</div>
        //     {/* {restaurant.name} */}
        //     <div className={styles.infoHolder}>
        //          {!!restaurant.menu?.length && (
        //        <div className={styles.menuHolder}>
        //           <h3 className={styles.menuTitle}>Меню</h3>
        //           < Menu dishIds = {menu}/>
        //        </div>
        //         )}
        //         <div>
        //             <h3 className={styles.reviewTitle}>Отзывы</h3>
        //             {reviews?.length ? (
        //             <div>
        //                 <Reviews reviewIds = {reviews}/>
        //             </div>
        //             ) : "Be the first"}
        //         </div>
        //     </div>
           
          
        // </div>
    )
    
};
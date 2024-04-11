import { Reviews } from '../reviews/component';
import { Menu } from '../menu/component';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant}) => {
    if(!restaurant) {
        return null
    }
    const { name,  menu, reviews} = restaurant 
   
    return (
        <div className={styles.root}> 
           <div className={styles.title}>{name ? name : "NoName"}</div>
            {/* {restaurant.name} */}
            <div className={styles.infoHolder}>
                 {!!restaurant.menu?.length && (
               <div className={styles.menuHolder}>
                  <h3 className={styles.menuTitle}>Меню</h3>
                  < Menu menu = {menu}/>
               </div>
                )}
                <div>
                    <h3 className={styles.reviewTitle}>Отзывы</h3>
                    {reviews?.length ? (
                    <div>
                        <Reviews reviews = {reviews}/>
                    </div>
                    ) : "Be the first"}
                </div>
            </div>
           
          
        </div>
    )
    
};
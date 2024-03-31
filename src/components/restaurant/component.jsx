import { Reviews } from '../reviews/component';
import { Menu } from '../menu/component';


export const Restaurant = ({ restaurant }) => {
    if(!restaurant) {
        return null
    }
    const { name,  menu, reviews} = { restaurant }
    
    return (
        <div> 
            <h2>{name ? name : "NoName"}</h2> 
            
            {!!menu?.length && (
               <div>
                  <h3>Меню</h3>
                  < Menu menu = {menu}/>
               </div>
            )}
               
            
           
            <h3>Отзывы</h3>
            {reviews?.length ? (
                <div>
                    <Reviews reviews = {reviews}/>
                </div>
            ) : "Be the first"} 
            
            
            
        </div>
    )
    
};
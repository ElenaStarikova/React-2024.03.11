import { Review } from '../review/component';
import styles from './styles.module.scss';


export const Reviews = ({reviews, className}) => {
    return (
        <div className={styles.root}>           
            {reviews.map((review) => (
                <Review review = {review} />                
            ))}  
        </div>
    ) 
};
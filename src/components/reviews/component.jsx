import { Review } from '../review/component';
import styles from './styles.module.scss';


export const Reviews = ({reviewIds, className}) => {
    return (
        <div className={styles.root}>           
            {reviewIds.map((reviewId) => (
                <Review reviewId = {reviewId} />                
            ))}  
        </div>
    ) 
};
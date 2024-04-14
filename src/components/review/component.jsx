import styles from "./styles.module.scss";
import { useSelector } from 'react-redux';
import { User} from '../user/component.jsx';

export const Review = ({ reviewId }) => {
    const review = useSelector(
        (state) => state.review.entities[reviewId]
    )
    if(!review) {
        return null;
    }

    return(
        <span className={styles.root}>
            {review.text}
            <User userId = {review.userId}/>
        </span>
    )
};
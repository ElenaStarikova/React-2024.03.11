import styles from "./styles.module.scss";

export const Review = ({ review }) => {
    return(
        <span className={styles.root}>
            {review.text}
        </span>
    )
};
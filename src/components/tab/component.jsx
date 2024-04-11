import styles from './styles.module.scss';


export const Tab = ({ title, isActive, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            disabled={isActive}
            className={styles.tabButton}
        >
        {title}
        </button>
    )
}
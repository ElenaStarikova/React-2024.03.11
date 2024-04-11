import styles from './styles.module.scss';
import { UserButtons} from '../user-buttons/component.jsx';
import { ThemeToggle } from '../theme-toggle/component.jsx';


export const Footer = () => {
    return(
        <div className={styles.root}>Footer
            <div className={styles.buttonsHolder}>
                    <ThemeToggle/>
                    <UserButtons/>              
                </div>
        </div>
    )
};
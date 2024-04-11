
import styles from './styles.module.scss';
import { UserButtons} from '../user-buttons/component.jsx';
import { ThemeToggle } from '../theme-toggle/component.jsx';

export const Header = () => {  
    return(
        
            <div className={styles.root}>
                <div className={styles.logoHolder}>
                    <div>Logo</div>
                    <div>Food delivery</div>
                </div>
                <div className={styles.buttonsHolder}>
                    <ThemeToggle/>
                    <UserButtons/>              
                </div>
            </div>
      
    )
};
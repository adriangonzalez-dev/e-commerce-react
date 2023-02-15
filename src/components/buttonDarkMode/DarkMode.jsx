import { useTheme } from '../../hooks';
import styles from './darkMode.module.css'

export const DarkMode = () => {
  const {darkModeFunction} = useTheme()
  return (
    <label className={`${styles.switch}`}>
      <input type="checkbox" 
      className={styles.inputCheck} 
      onChange={darkModeFunction}/>
      <span className={styles.slider}></span>
    </label>
  );
};

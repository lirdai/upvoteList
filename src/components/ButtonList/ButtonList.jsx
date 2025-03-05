import styles from './styles.module.css';
import UpArrow from "../../assets/arrow.svg?react";
import Button from '../Button';

const ButtonList = ({ buttonCount, list, toggleButton, addButton }) => {
    return (
        <div className={styles.buttonList}>
            <div className={styles.upvoteBox}>
                {Array.from({ length: buttonCount }).map((_, index) => (
                    <Button 
                        key={index}
                        className={`${styles.button} ${list ? styles.selectedBackgroundColor : styles.defaultBackgroundColor}`} 
                        onClick={toggleButton}
                        icon={<UpArrow className={list ? styles.selectedArrowColor : styles.defaultArrowColor} />}
                    />
                ))}
            </div>

            <Button 
                className={`${styles.plusIcon} ${styles.button}`}
                onClick={addButton}
                icon={"+"}
            />
        </div>
    );
};

export default ButtonList;
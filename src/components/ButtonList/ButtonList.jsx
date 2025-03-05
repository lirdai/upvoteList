import styles from './styles.module.css';
import Button from '../Button';

const ButtonList = ({
    buttonCount, buttonSelected, onClick,
    selectedStyle = styles.selectedBackgroundColor,
    defaultStyle = styles.defaultBackgroundColor,
    children }) => {
    return (
        <div className={styles.upvoteBox}>
            {Array.from({ length: buttonCount }).map((_, index) => (
                <Button
                    key={index}
                    className={`${styles.button} ${buttonSelected ? selectedStyle : defaultStyle}`}
                    onClick={onClick}
                >
                    {children}
                </Button>
            ))}
        </div>
    );
};

export default ButtonList;
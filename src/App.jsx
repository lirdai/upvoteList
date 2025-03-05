import { useState } from 'react'
import styles from './styles.module.css';
import ButtonList from './components/ButtonList';
import Button from './components/Button';
import UpArrow from "./assets/arrow.svg?react";

function App() {
  const [buttonCount, setButtonCount] = useState([1, 1, 1]);
  const [buttonSelected, setButtonSelected] = useState([false, false, false]);

  const toggleButton = (index) => {
    setButtonSelected((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next
    })
  };

  const addButton = (index) => {
    setButtonCount((prev) => {
      const next = [...prev];
      next[index]++;
      return next
    })
  };

  return (
    <div className={styles.background}>
      <div className={styles.foreground}>
        {buttonCount.map((count, index) =>
          <div className={styles.buttonList} key={index}>
            <ButtonList
              buttonCount={count}
              buttonSelected={buttonSelected[index]}
              onClick={() => toggleButton(index)}
            >
              <UpArrow className={buttonSelected ? styles.selectedArrowColor : styles.defaultArrowColor} />
            </ButtonList>

            <Button
              className={`${styles.plusIcon} ${styles.button}`}
              onClick={() => addButton(index)}
            > + </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

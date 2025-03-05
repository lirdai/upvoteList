import { useState, useEffect } from 'react'
import styles from './styles.module.css';
import ButtonList from './components/ButtonList';
import Button from './components/Button';
import UpArrow from "./assets/arrow.svg?react";

const INIT_BUTTON_COUNT = [1, 1, 1];
const INIT_BUTTON_SELECTED = [false, false, false];
const BUTTON_COUNT_KEY = 'buttonCount';
const BUTTON_SELECTED_KEY = 'buttonSelected';

function App() {
  const [buttonCount, setButtonCount] = useState(() => {
    const stored = localStorage.getItem(BUTTON_COUNT_KEY);
    return stored ? JSON.parse(stored) : INIT_BUTTON_COUNT;
  });
  const [buttonSelected, setButtonSelected] = useState(() => {
    const stored = localStorage.getItem(BUTTON_SELECTED_KEY);
    return stored ? JSON.parse(stored) : INIT_BUTTON_SELECTED;
  });

  useEffect(() => {
    localStorage.setItem(BUTTON_COUNT_KEY, JSON.stringify(buttonCount));
    localStorage.setItem(BUTTON_SELECTED_KEY, JSON.stringify(buttonSelected));
  }, [buttonCount, buttonSelected]);

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
              <UpArrow className={buttonSelected[index] ? styles.selectedArrowColor : styles.defaultArrowColor} />
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

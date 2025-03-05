import { useState } from 'react'
import './App.css'
import ButtonList from './components/ButtonList';

function App() {
  const [buttonCount, setButtonCount] = useState([1, 1, 1]);
  const [list, setList] = useState([false, false, false]);

  const toggleButton = (index) => {
    setList((prev) => {
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
    <div className='background'>
      <div className='foreground'>
        {buttonCount.map((count, index) => 
          <ButtonList
            buttonCount={count}
            list={list[index]}
            toggleButton={() => toggleButton(index)}
            addButton={() => addButton(index)}
          />
        )}
      </div>
    </div>
  )
}

export default App

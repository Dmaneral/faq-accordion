import { useState } from 'react';
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'
import styles from './Item.module.css'

export default function Item(props: {question: string, answer: string}) {
    const [opened, setOpened] = useState(false);

    function onOpen() {
        setOpened(!opened)
    }

  return (
    <div>
      <div className={styles.question}>
        <h2 onClick={onOpen}>{props.question}</h2>
        <img src={opened ? minus : plus} alt="btn" onClick={onOpen} />
      </div>
      {
        opened ?
        (<p>{props.answer}</p>)
        : null
      }
      
    </div>
  )
}

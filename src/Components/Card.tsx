import styles from './Card.module.css'
import logo from '../assets/images/icon-star.svg'
import Item from './Item'


export default function Card() {
    const faq = [{question: 'Question 1', answer: 'Answer1'}, {question: 'Question 2', answer: 'Answer2'}, {question: 'Question 3', answer: 'Answer3'}, {question: 'Question 4', answer: 'Answer4'}]

  return (
    <div className={styles.Card}>
      <div className={styles.header}>
        <img src={logo} alt="star" />
        <h1>FAQs</h1>
      </div>
      <div className={styles.content}>
        {
            faq.map((item, index: number) => (
                <>
                    <Item question={item.question} answer={item.answer} key={index} />
                    {index == 3 ? null : (<hr />)}
                </>               
            ))
        }
      </div>
    </div>
  )
}

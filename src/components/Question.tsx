import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Statement from "./Statement";
import Timer from "./Timer";

const letters = [
  { value: 'A', color: '#f2c866' },
  { value: 'B', color: '#f266ba' },
  { value: 'C', color: '#85d4f2' },
  { value: 'D', color: '#bce596' }
]

interface QuestionProps {
  value: QuestionModel
  timerToAnswer?: number
  onResponse: (index: number) => void
  timerFinished: () => void
}

export default function Question(props: QuestionProps) {
  const question = props.value

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={i}
          value={answer}
          index={i}
          letter={letters[i].value}
          colorLetter={letters[i].color}
          onResponse={props.onResponse}
        />
      )
    })
  }

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Timer 
        duration={props.timerToAnswer ?? 10} 
        timerFinished={props.timerFinished}
      />
      {renderAnswers()}
    </div>
  )
}
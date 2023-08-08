import styles from '../styles/Form.module.css'
import QuestionModel from "../model/question"
import Question from './Question'
import Button from './Button'

interface FormProps {
  question: QuestionModel
  last: boolean
  questionAnswered: (question: QuestionModel) => void
  toNextPace: () => void

}

export default function Form(props: FormProps) {

  function onResponse(index: number) {
    if (props.question.notAnswered) {
      props.questionAnswered(props.question.answerWith(index))
    }
  }

  return (
    <div className={styles.form}>
      {props.question ?
        <Question
          value={props.question}
          timerToAnswer={6}
          onResponse={onResponse}
          timerFinished={props.toNextPace}
        /> : false
      }


      <Button onClick={props.toNextPace} text={props.last ? 'Finalizar' : 'Próxima'} />
    </div>
  )
}
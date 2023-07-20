import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
import Button from '../components/Button'

const questionMoc = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelha'),
  AnswerModel.wrong('Azul'),
  AnswerModel.certain('Preta')
])

export default function Home() {
  const [question, setQuestion] = useState(questionMoc)

  function handleOnResponse (index: number) {
    setQuestion(question.answerWith(index))
  }

  function timerFinished() {
    if(question.notAnswered) {
      setQuestion(question.answerWith(-1))
    }
    
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question timerToAnswer={5} value={question} onResponse={handleOnResponse} timerFinished={timerFinished} />
      <Button text="Próxima" href='/result' />
    </div>
  )
}

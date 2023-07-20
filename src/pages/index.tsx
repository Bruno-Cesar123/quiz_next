import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'

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
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question value={question} onResponse={handleOnResponse} />
    </div>
  )
}

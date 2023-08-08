import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
import Button from '../components/Button'
import Form from '../components/Form'

const questionMoc = new QuestionModel(1, 'Melhor cor?', [
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelha'),
  AnswerModel.wrong('Azul'),
  AnswerModel.certain('Preta')
])

export default function Home() {
  const [question, setQuestion] = useState(questionMoc)

  function questionAnswered(question: QuestionModel) {

  }

  function toNextPace() {

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      
      <Form
        question={question}
        last={true}
        questionAnswered={questionAnswered}
        toNextPace={toNextPace}
      />
      
    </div>
  )
}

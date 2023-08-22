import { useEffect, useState } from 'react'
import QuestionModel from '../model/question'
import Form from '../components/Form'
import { useRouter } from 'next/router'


const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()
  const [idsQuestions, setIdsQuestions] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [answersCertain, setAnswersCertain] = useState<number>(0)

  async function loadIdsQuestions() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const idsQuestions = await resp.json()
    setIdsQuestions(idsQuestions)
  }

  async function loadQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadIdsQuestions()
  }, [])

  useEffect(() => {
    idsQuestions.length > 0 && loadQuestion(idsQuestions[0])

  }, [idsQuestions])

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered)
    const certain = questionAnswered.hit
    setAnswersCertain(answersCertain + (certain ? 1 : 0))
  }

  function idNextQuestion() {

    const nextIndex = idsQuestions.indexOf(question.id) + 1

    return idsQuestions[nextIndex]


  }

  function toNextPace() {
    const nextId = idNextQuestion()

    nextId ? goToNextQuestion(nextId) : finallyQuestion()
  }

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function finallyQuestion() {
    router.push({
      pathname: '/result',
      query: {
        total: idsQuestions.length,
        certains: answersCertain
      }
    })
  }

  return question ? (
    <Form
      question={question}
      last={idNextQuestion() === undefined}
      questionAnswered={questionAnswered}
      toNextPace={toNextPace}
    />
  ) : false




}

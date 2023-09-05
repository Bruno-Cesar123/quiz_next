import { shuffle } from '../../../functions/arrays'
import questions from '../dbQuestions'

// eslint-disable-next-line import/no-anonymous-default-export
export default function form(req, res) {
  const ids = questions.map(question => question.id)
  res.status(200).json(shuffle(ids))
}
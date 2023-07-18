import questions from '../dbQuestions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const idSelected = +req.query.id

  const questionsSelected = questions.filter(question => question.id === idSelected)

  if (questionsSelected.length === 1) {
    const questionSelected = questionsSelected[0]
    res.status(200).json(questionSelected.toObject())
  } else {
    res.status(404).send()
  }

  res.status(200).json(questions[0].toObject())
}
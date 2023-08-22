import { shuffle } from "../functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #statement: string
  #answers: AnswerModel[]
  #hit: boolean
  // #answered: boolean

  constructor(id: number, statement: string, answers: AnswerModel[], hit = false) {
    this.#id = id
    this.#statement = statement
    this.#answers = answers
    this.#hit = hit
  }

  get id() {
    return this.#id
  }

  get statement() {
    return this.#statement
  }

  get answers() {
    return this.#answers
  }

  get hit() {
    return this.#hit
  }

  get notAnswered() {
    return !this.answered
  }

  get answered() {
    for(let answer of this.#answers) {
      if (answer.revealed) return true
    }
    
    return false
  }

  answerWith(index: number): QuestionModel {
    const hit = this.#answers[index]?.certain
    const answers = this.#answers.map((answer, i) => {
      const answerSelected = index === i
      const mustReveal = answerSelected || answer.certain
      return mustReveal ? answer.reveal() : answer
    })

    return new QuestionModel(this.id, this.statement, answers, hit)
  }

  shuffleAnswers(): QuestionModel {
    let answersShuffle = shuffle(this.#answers)

    return new QuestionModel(this.#id, this.#statement, answersShuffle,this.#hit)
  }

  static createUsingObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map(resp => AnswerModel.createUsingObject(resp))
    return new QuestionModel(obj.id, obj.statement, answers, obj.hit)
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map(resp => resp.toObject()),
      answered: this.answered,
      hit: this.#hit
    }
  }


}
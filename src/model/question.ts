export default class QuestionModel {
  #id: number
  #statement: string
  #answers: any[]
  #hit: boolean
  // #answered: boolean

  constructor(id: number, statement: string, answers: any[], hit = false) {
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

  get answered() {
    return false
  }


}
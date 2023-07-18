export default class AnswerModel {
  #value: string;
  #certain: boolean
  #revealed: boolean

  constructor(value: string, certain: boolean, revealed = false) {
    this.#value = value
    this.#certain = certain
    this.#revealed = revealed
  }

  get value() {
    return this.#value
  }

  get certain() {
    return this.#certain
  }

  get revealed() {
    return this.#revealed
  }
}
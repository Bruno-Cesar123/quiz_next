import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual bicho transmite a doença de chagas ?', [
    AnswerModel.wrong('Abelha'),
    AnswerModel.wrong('Barata'),
    AnswerModel.wrong('Pulga'),
    AnswerModel.certain('Barbeiro'),
  ]),
  new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum" ?', [
    AnswerModel.wrong('Caju'),
    AnswerModel.wrong('Côco'),
    AnswerModel.wrong('Chuchu'),
    AnswerModel.certain('Abóbora'),
  ]),
]

export default questions
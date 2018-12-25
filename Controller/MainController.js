var MainView = require('../View/MainView')
var Queries = require('../Model/Queries')

var MainController = function () {
  var input = MainView.MainMenu()
  console.log('Input received: ' + input)
  if (input === 'q') {

  } else if (input === '1') {
    Questions()
  } else if (input === '2') {
    Student()
  } else {
    MainView.InvalidChoice()
    MainController()
  }
}

var Questions = function () {
  var input = MainView.QuestionsMenu()
  switch (input) {
    case 'b':
      MainController()
      break

    case '1':
      Queries.QuestionsBySubject().then((result) => {
        MainView.QuestionsBySubject(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '2':
      Queries.ListTests().then((result) => {
        MainView.ListTests(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '3':
      Queries.QuestionsForTest().then((result) => {
        MainView.QuestionsForTest(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '4':
      Queries.UnAnsweredQuestions().then((result) => {
        MainView.UnAnsweredQuestions(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '5':
      Queries.ResultsByQuestion().then((result) => {
        MainView.ResultsByQuestion(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '6':
      Queries.TotalAndAveragePerSubject().then((result) => {
        MainView.TotalAndAveragePerSubject(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    default:
      MainView.InvalidChoice()
      Questions()
  }
}

var Student = function () {
  var input = MainView.StudentsMenu()
  if (input === 'b') {
    MainController()
  } else if (input === '1') {
    Queries.ListStudents().then((result) => {
      MainView.ListStudents(result)
      Student()
    }).catch((err) => console.log(err))
  } else if (input === '2') {
    Queries.StudentHighestScore().then((result) => {
      MainView.StudentHighestScore(result)
      Student()
    }).catch((err) => console.log(err))
  } else if (input === '3') {
    Queries.StudentLowestScore().then((result) => {
      MainView.StudentLowestScore(result)
      Student()
    }).catch((err) => console.log(err))
  } else if (input === '4') {
    Queries.TestsTakenPerStudent().then((result) => {
      MainView.TestsTakenPerStudent(result)
      Student()
    }).catch((err) => console.log(err))
  } else {
    MainView.InvalidChoice()
  }
}

module.exports.MainController = MainController

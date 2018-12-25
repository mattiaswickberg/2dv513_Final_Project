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
        console.log(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '2':
      Queries.ListTests().then((result) => {
        console.log(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '3':
      Queries.QuestionsForTest().then((result) => {
        console.log(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '4':
      Queries.UnAnsweredQuestions().then((result) => {
        console.log(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '5':
      Queries.ResultsByQuestion().then((result) => {
        console.log(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    case '6':
      Queries.TotalAndAveragePerSubject().then((result) => {
        console.log(result)
        Questions()
      }).catch((err) => console.log(err))
      break

    default:
      MainView.InvalidChoice()
  }
}

var Student = function () {
  var input = MainView.StudentsMenu()
  if (input === 'b') {
    MainController()
  } else if (input === '1') {
    Queries.ListStudents().then((result) => {
      console.log(result)
      Student()
    }).catch((err) => console.log(err))
  } else if (input === '2') {
    Queries.StudentHighestScore().then((result) => {
      console.log(result)
      Student()
    }).catch((err) => console.log(err))
  } else if (input === '3') {
    Queries.StudentLowestScore().then((result) => {
      console.log(result)
      Student()
    }).catch((err) => console.log(err))
  } else if (input === '4') {
    Queries.TestsTakenPerStudent().then((result) => {
      console.log(result)
      Student()
    }).catch((err) => console.log(err))
  } else {
    MainView.InvalidChoice()
  }
}

module.exports.MainController = MainController

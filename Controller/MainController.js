var MainView = require('../View/MainView')
var Queries = require('../Model/Queries')

module.exports = function(){
    var run = true

    while(run) {
        var input = MainView.MainMenu()
        console.log("Input received: " + input)
        if (input === 'q') {
            run = false
        } else if (input === '1') {
            Questions()

        } else if (input === '2') {
            Student()
        } else {
            MainView.InvalidChoice()
        }
    }
}

var Questions = function() {
    var run = true

    while(run) {
    var input = MainView.QuestionsMenu()
    switch(input) {
        case 'b':
        run=false
        break

        case '1':
        Queries.QuestionsBySubject()
        break

        case '2':
        Queries.ListTests()
        break

        case '3':
        Queries.QuestionsForTest()
        break

        case '4':
        Queries.UnAnsweredQuestions()
        break

        case '5':
        Queries.ResultsByQuestion()
        break

        case '6':
        Queries.TotalAndAveragePerSubject()
        break

        default:
        MainView.InvalidChoice()
    }
    }
}

var Student = function() {
    var run = true

    while(run) {
    var input = MainView.StudentsMenu()
    switch(input) {
        case 'b':
        run=false
        break

        case '1':
        Queries.ListStudents()
        break

        case '2':
        Queries.StudentHighestScore()
        break

        case '3':
        Queries.StudentLowestScore()
        break

        case '4':
        Queries.TestsTakenPerStudent()
        break

        default:
        MainView.InvalidChoice()
    }
    }
}
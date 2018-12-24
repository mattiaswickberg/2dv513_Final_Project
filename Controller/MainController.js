var MainView = require('../View/MainView')

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
        //TODO
        break

        case '2':
        //TODO
        break

        case '3':
        //TODO
        break

        case '4':
        //TODO
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
        //TODO
        break

        case '2':
        //TODO
        break

        case '3':
        //TODO
        break

        case '4':
        //TODO
        break

        default:
        MainView.InvalidChoice()
    }
    }
}
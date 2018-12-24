const readlineSync = require('readline-sync')

var MainMenu = function() {
    console.log('Welcome to QuizBase!')
    console.log('1. View tests and questions')
    console.log('2. View student results')
    console.log('q. Quit')

    return readlineSync.question('Enter your choice: ')
}

module.exports.MainMenu = MainMenu
const readlineSync = require('readline-sync')

var MainMenu = function() {
    console.log('\n Welcome to QuizBase!')
    console.log('1. View tests and questions')
    console.log('2. View student results')
    console.log('q. Quit')

    return readlineSync.question('Enter your choice: ')
}

var QuestionsMenu = function() {
    console.log('\n Tests, Subjects and Questions')
    console.log('1. List questions by subject')
    console.log('2. List tests')
    console.log('3. List questions for specific test')
    console.log('4. List unused questions')
    console.log('5. See results for all questions')
    console.log('6. List results, total and average score per subject')
    console.log('b. Back to main menu')

    return readlineSync.question('Enter your choice: ')
}

var StudentsMenu = function() {
    console.log('\n Students')
    console.log('1. List students')
    console.log('2. Get studen with highest total score')
    console.log('3. Get student with lowest total score')
    console.log('4. List number of tests taken per student')
    console.log('b. Back to main menu')

    return readlineSync.question('Enter your choice: ')
}

var InvalidChoice = function() {
    console.log('Invalid Choice')
}

module.exports.MainMenu = MainMenu
module.exports.QuestionsMenu= QuestionsMenu
module.exports.StudentsMenu = StudentsMenu
module.exports.InvalidChoice = InvalidChoice
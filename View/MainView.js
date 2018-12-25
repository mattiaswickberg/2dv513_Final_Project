const readlineSync = require('readline-sync')

var MainMenu = function () {
  console.log('\n Welcome to QuizBase!')
  console.log('1. View tests and questions')
  console.log('2. View student results')
  console.log('q. Quit')

  return readlineSync.question('Enter your choice: ')
}

var QuestionsMenu = function () {
  console.log('\n Tests, Subjects and Questions')
  console.log('1. List questions by subject')
  console.log('2. List tests')
  console.log('3. List questions for specific test')
  console.log('4. List questions with no results')
  console.log('5. See results for all questions')
  console.log('6. List results, total and average score per subject')
  console.log('b. Back to main menu')

  return readlineSync.question('Enter your choice: ')
}

var StudentsMenu = function () {
  console.log('\n Students')
  console.log('1. List students')
  console.log('2. Get studen with highest total score')
  console.log('3. Get student with lowest total score')
  console.log('4. List number of tests taken per student')
  console.log('b. Back to main menu')

  return readlineSync.question('Enter your choice: ')
}

var InvalidChoice = function () {
  console.log('Invalid Choice')
}

// Functions to present query results

var QuestionsBySubject = function (result) {
  console.log('Questions, sorted by subject')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('Subject: ' + element.subject + '. Question id: ' + element.question_id + '. Question ' + element.question_body)
  })
  console.log('---------------------------------------------')
}

var ListTests = function (result) {
  console.log('Tests in database')
  console.log('---------------------------------------------')

  result.forEach(element => {
    console.log('Test name: ' + element.test_name + '. Test id: ' + element.test_id)
  })
  console.log('---------------------------------------------')
}

var QuestionsForTest = function (result) {
  console.log('Questions, sorted by test')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('Test name: ' + element.test_name + '. Question: ' + element.question_body)
  })
  console.log('---------------------------------------------')
}

var UnAnsweredQuestions = function (result) {
  console.log('Questions that no students have answered')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('Question: ' + element.question_body + ' with id: ' + element.question_id + ' for subject: ' + element.subject + ' in course: ' + element.course)
  })
  console.log('---------------------------------------------')
}

var ResultsByQuestion = function (result) {
  console.log('Results for each question in database')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('Question ' + element.question_body + ' score: ' + element.score)
  })
  console.log('---------------------------------------------')
}

var TotalAndAveragePerSubject = function (result) {
  console.log('Scores per subject, total and average')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('Subject: ' + element.subject + 'has been answered ' + element.answers + ' times, with a total score of ' + element.sum + ' and an average of ' + element.average)
  })
  console.log('---------------------------------------------')
}

var ListStudents = function (result) {
  console.log('Students registered in database')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('Student name: ' + element.name + ' Student id: ' + element.student_id)
  })
  console.log('---------------------------------------------')
}

var StudentHighestScore = function (result) {
  console.log('Highest scoring student')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('The highest scoring student is ' + element.student_id + ' with a total of ' + element.sum + 'points')
  })
  console.log('---------------------------------------------')
}

var StudentLowestScore = function (result) {
  console.log('Lowest scoring student')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('The lowest scoring student is ' + element.student_id + ' with a total of ' + element.sum + 'points.')
  })
  console.log('---------------------------------------------')
}

var TestsTakenPerStudent = function (result) {
  console.log('Number of tests that each student has taken')
  console.log('---------------------------------------------')
  result.forEach(element => {
    console.log('Student ' + element.student_id + ' has taken a total of ' + element.sum + ' tests.')
  })
  console.log('---------------------------------------------')
}

module.exports = {
  MainMenu: MainMenu,
  QuestionsMenu: QuestionsMenu,
  StudentsMenu: StudentsMenu,
  InvalidChoice: InvalidChoice,
  QuestionsBySubject: QuestionsBySubject,
  ListTests: ListTests,
  QuestionsForTest: QuestionsForTest,
  UnAnsweredQuestions: UnAnsweredQuestions,
  ResultsByQuestion: ResultsByQuestion,
  TotalAndAveragePerSubject: TotalAndAveragePerSubject,
  ListStudents: ListStudents,
  StudentHighestScore: StudentHighestScore,
  StudentLowestScore: StudentLowestScore,
  TestsTakenPerStudent: TestsTakenPerStudent
}

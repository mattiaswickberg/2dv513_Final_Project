var database = require('./database')

var QuestionsBySubject = function () {
  return database.quizQuery('SELECT question_body, question_id, subject FROM question ORDER BY subject')
}

var ListTests = function () {
  return database.quizQuery('SELECT * FROM test')
}

var QuestionsForTest = function () {
  return database.quizQuery('SELECT B.test_id, T.test_name, Q.question_body FROM belongs_to B JOIN test T ON B.test_id = T.test_id JOIN question Q ON B.question_id = Q.question_id ORDER BY T.test_name')
}

var UnAnsweredQuestions = function () {
  return database.quizQuery('SELECT question.* FROM question LEFT JOIN result ON (question.question_id = result.question_id) WHERE result.question_id IS NULL')
}

var ResultsByQuestion = function () {
  return database.quizQuery('SELECT question.question_id, question.question_body, result.score FROM question INNER JOIN result ON result.question_id=question.question_id ORDER BY question.question_id')
}

var TotalAndAveragePerSubject = function () {
  return database.quizQuery('SELECT t1.subject, COUNT(t1.subject) AS answers, SUM(t2.score) AS sum, AVG(t2.score) AS average FROM question AS t1 LEFT JOIN result AS t2 ON (t1.question_id=t2.question_id) GROUP BY t1.subject')
}

// Queries for students
var ListStudents = function () {
  return database.quizQuery('SELECT name, student_id FROM student')
}

var StudentHighestScore = function () {
  return database.quizQuery('SELECT `student_id`, SUM(`score`) AS sum FROM `result` GROUP BY `student_id` ORDER BY SUM(`score`) DESC LIMIT 1')
}

var StudentLowestScore = function () {
  return database.quizQuery('SELECT `student_id`, SUM(`score`) AS sum FROM `result` GROUP BY `student_id` ORDER BY SUM(`score`) ASC LIMIT 1')
}

var TestsTakenPerStudent = function () {
  return database.quizQuery('SELECT student_id, COUNT(student_id) AS sum FROM takes GROUP BY student_id')
}

module.exports = {
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

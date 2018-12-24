var quizQuery = require('./Model/database')

var MaxSCoreSql = "SELECT `student_id`, SUM(`score`) FROM `result` GROUP BY `student_id` ORDER BY SUM(`score`) DESC LIMIT 1"
var QuestionResultSql = "SELECT question.question_id, question.question_body, result.score FROM question INNER JOIN result ON result.question_id=question.question_id ORDER BY question.question_id"
var unansweredQuestionSql = "SELECT question.* FROM question LEFT JOIN result ON (question.question_id = result.question_id) WHERE result.question_id IS NULL"   
var SubjByScoreSql = "SELECT t1.subject, COUNT(t1.subject), SUM(t2.score), AVG(t2.score) FROM question AS t1 LEFT JOIN result AS t2 ON (t1.question_id=t2.question_id) GROUP BY t1.subject"
var TestsTakenPerStudent = "SELECT student_id, COUNT(student_id) FROM takes GROUP BY student_id"

quizQuery.quizQuery(TestsTakenPerStudent)

var insert = require("./server/database")

var insertSql = "INSERT INTO student (student_id, name) VALUES ?"
var students = [['13phde', 'Phedre Dulaney']]

var sqlAlt = "INSERT INTO alternative (alt_body, alt_id, is_correct) VALUES ?"
var alt = [[]]

var sqlBelongs = "INSERT INTO belongs_to (question_id, test_id) VALUES ?"
var belongs = [[]]

var sqlIsFor = "INSERT INTO isfor (alt_id, question_id) VALUES ?"
var isFor = [[]]

var sqlquestion = "INSERT INTO question (question_id, question_body, course, subject) VALUES ?"
var question = [["q001", ""]]

var sqlResult = "INSERT INTO result (question_id, student_id, date, score) VALUES ?"
var result = [[]]

var sqlTakes = "INSERT INTO takes (student_id, test_id, date) VALUES ?"
var takes = [[]]

var sqlTest = "INSERT INTO test (test_id, test_name) VALUES ?"
var test = [[]]

insert.insert(insertSql, students);
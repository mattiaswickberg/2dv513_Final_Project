var mysql = require('mysql')

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'mattias',
  password: 'hubbabubba',
  database: 'quizbase'
})

var insertStudent = function (student) {
  var time = Date.now();
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log(err)
    }
    var sql = "INSERT INTO student (student_id, name) VALUES ?"
    connection.query(sql, [student], function (err, result) {
      if (err) throw err
      console.log(result)
      console.log('Query took ' + (Date.now() - time) + ' milliseconds')
      connection.release()
    })
  })
}

var quizQuery = function() {
  var time = Date.now();
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log(err)
    }
    var sql = "SELECT `subreddit`, MAX(`score`) FROM `reddit_comments`"
    connection.query(sql, function (err, result) {
      if (err) throw err
      console.log(result)
      console.log('Query took ' + (Date.now() - time) + ' milliseconds')
      connection.release()
    })
  })
}

module.exports.insertStudent = insertStudent
module.exports.quizQuery = quizQuery

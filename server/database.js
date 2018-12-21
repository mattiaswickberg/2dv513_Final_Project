var mysql = require('mysql')

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'mattias',
  password: 'hubbabubba',
  database: 'quizbase'
})

var insert = function (sql, student) {
  var time = Date.now();
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log(err)
    }
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

module.exports.insert = insert
module.exports.quizQuery = quizQuery

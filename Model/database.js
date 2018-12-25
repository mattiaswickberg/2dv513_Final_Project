var mysql = require('promise-mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'mattias',
  password: 'hubbabubba',
  database: 'quizbase'
})

var insert = function (sql, student) {
  var time = Date.now()
  connection.connect()
  connection.query(sql, [student], function (err, result) {
    if (err) throw err
    console.log(result)
    console.log('Query took ' + (Date.now() - time) + ' milliseconds')
    connection.release()
  })
}

var quizQuery = function (sql) {
  return new Promise((resolve, reject) => {
    console.log('Looking into database ...')
    connection.then(function (conn) {
      var result = conn.query(sql)
      resolve(result)
    }).catch((err) => {
      console.log(err)
    })
  })
}

module.exports.insert = insert
module.exports.quizQuery = quizQuery

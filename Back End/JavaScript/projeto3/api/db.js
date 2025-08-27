var mysql = require('mysql2/promise'); 

var pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'escola',
    database: 'api_becker',
});

module.exports = Object.freeze({
  pool: pool
});
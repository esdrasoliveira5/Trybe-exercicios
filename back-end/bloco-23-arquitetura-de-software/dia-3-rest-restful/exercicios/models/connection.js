const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'esdras',
  password: '1q2w3e4r5t@Mysql321',
  database: 'model_example' });

  module.exports = connection;
  
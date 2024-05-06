const mysql = require('mysql2')
  const pool = mysql.createPool({
    host : 'localhost',
    port:3306,
    user: 'root',
    password:'manager',
    database:'pune',
    waitForConnections:true,
    maxIdle: 10,
    connectionLimit:10,
    idleTimeout:60000,
    enableKeepAlive:true,
    keepAliveInitialDelay:0,
  })

  module.exports = {
    pool,
}

// function openConnection(){
//     const connection = mysql.createConnection({
//         host:'localhost',
//         myport: 3306,
//         user: 'root',
//         password: 'manager',
//         database:'mern',
//     })

//     connection.connect();
//     return connection;
// }
// module.exports = {
//     openConnection,
// }

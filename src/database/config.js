const mysql = require("mysql2");

const mysqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

async function execute(query) {
    const connection = await mysql.createConnection(mysqlConfig);
    connection.connect();

    connection.query(query, (error, results) => {
        connection.end();

        if (error) {
            return error;
        }

        console.log(results);
        return results;
    });

    connection.on("error", (error) => {
        return ("Error in mysql server " + error.sqlMessage);
    });
}

module.exports = {
    execute
}
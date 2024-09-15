import mysql from "mysql";

//Conección a la base de datos

export const db = mysql.createConnection({
  host: "sql5.freemysqlhosting.net",
  user: "sql5731294",
  password: "nKfthLLrTg",
  database: "sql5731294",
});

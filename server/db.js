import mysql from "mysql"

export const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'qwer1234!@#$',
  database : 'lms'
});
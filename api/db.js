import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "instereo4",
    password: "Fullstack123",
    database: "crud"
})
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config()


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE
    },
    console.log(`Connected to the employee_db database.`)
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


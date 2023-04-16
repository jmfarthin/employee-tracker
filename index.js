const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const figlet = require('figlet');
require('dotenv').config()

const { addDepartmentQuestions, addRoleQuestions, menuQuestion } = require("./questions")
var connection;

const init = async () => {
    figlet("Employee Tracker", (err, data) => {
        if (err) {
            console.log("Sorry...that didn't work!")
            return;
        }
        console.log(data);
        console.log('By Justin Farthing');
        console.log('');
    });
    try {
        // get the client
        const mysql = require('mysql2/promise');
        // create the connection
        connection = await mysql.createConnection({ host: 'localhost', user: process.env.USER, database: process.env.DATABASE, password: process.env.PASS });
        // query database

        menu()
    } catch (error) {
        console.log(error)
    }
}




const viewDepartment = async () => {
    const [rows, fields] = await connection.execute('SELECT * FROM department');

    console.log(rows)
    menu()
}

const addDepartment = async () => {
    const answers = await inquirer.prompt(addDepartmentQuestions)
    console.log(answers)
    //make a new department

    viewDepartment()

}

const menu = async () => {
    var { choice } = await inquirer.prompt(menuQuestion)
    console.log(choice)
    switch (choice) {
        case "Add Department":
            addDepartment()
            break;
        case "View Department":
            viewDepartment()
        default:
            console.log("Thanks for using our software!")
            process.exit(0)
            break;
    }

}
init()
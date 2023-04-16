const inquirer = require('inquirer');
const cTable = require('console.table');
const figlet = require('figlet');
require('dotenv').config()

const { addDepartmentQuestions, addRoleQuestions, menuQuestion, addEmployeeQuestions, updateEmployeeQuestions } = require("./questions")
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
        menu()
    } catch (error) {
        console.log(error)
    }
}


const menu = async () => {
    var { choice } = await inquirer.prompt(menuQuestion)
    console.log(choice)
    switch (choice) {
        case "View Departments":
            viewTable('department')
            break;
        case "View Roles":
            viewTable('role')
            break;
        case "View Employees":
            viewTable('employees')
            break;
        case "Add Department":
            addDepartment()
            break;
        case "Add Role":
            addRole()
            break;
        case "Add Employee":
            addEmployee()
            break;
        case "Update Employee Role":
            updateEmployeeRole()
            break;
        default:
            console.log("Thanks for using Employee Tracker!")
            process.exit(0)
            break;
    }
}

// Department queries
const viewTable = async (table) => {
    const [rows, fields] = await connection.execute(`SELECT * FROM ${table}`);
    console.table(rows);
    menu()
}

const addDepartment = async () => {
    const { name } = await inquirer.prompt(addDepartmentQuestions)
    console.log(name);
    // make a new department
    viewTable('department');
}

// Role queries
// const viewRoles = async () => {

// }

init()

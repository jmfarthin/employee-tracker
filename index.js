const inquirer = require('inquirer');
const cTable = require('console.table');
const figlet = require('figlet');
require('dotenv').config()

const { addDepartmentQuestions, addRoleQuestions, menuQuestion, addEmployeeQuestions, updateEmployeeQuestions, departmentBudgetQuestions } = require("./questions")
var connection;


// initializes the connection to database
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


// main menu prompts
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

// function to view any table by using the table name as an argument
const viewTable = async (table) => {
    try {
        const [rows, fields] = await connection.execute(`SELECT * FROM ${table}`);
        console.table(rows);
        menu()
    } catch (error) {
        console.log(error)
    }
}

// creates a new department
const addDepartment = async () => {
    try {
        const { name } = await inquirer.prompt(addDepartmentQuestions)
        console.log(name);
        const newDept = await connection.query(`INSERT INTO department (name) VALUES('${name}');`)
    } catch (error) {
        console.log(error);
    }
    // make a new department
    viewTable('department');
}

// creates a new role
const addRole = async () => {
    try {
        const { title, salary, dept_id } = await inquirer.prompt(addRoleQuestions)
        const newRole = await connection.query(`INSERT INTO role (title, salary, dept_id) VALUES('${title}', ${salary}, '${dept_id}');`)
    } catch (error) {
        console.log(error)
    }
    viewTable('role');
}
// to add an employee
const addEmployee = async () => {
    try {
        const { first, last, role, manager } = await inquirer.prompt(addEmployeeQuestions)
        const newEmployee = await connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES('${first}', '${last}', ${role}, ${manager});`)
    } catch (error) {
        console.log(error)
    }
    viewTable('employees');
}

// updates an employees role
const updateEmployeeRole = async () => {
    try {
        const { id, role_id } = await inquirer.prompt(updateEmployeeQuestions);
        const updateRole = await connection.query(`UPDATE employees SET role_id = '${role_id}' WHERE id = ${id};`)
    } catch (error) {
        error
    }
    viewTable('employees');
}
// BONUS OBJECTIVES INCOMPLETE
// const getDepartmentBudget = async () =>{
//     try {
//         const { id } = await inquirer.prompt(departmentBudgetQuestions);
//         const sumDepartments = await connection.query(`SELECT SUM(salary)`)
//     } catch (error) {
//         console.log(error)
//     }
// }


init()

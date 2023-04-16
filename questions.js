// question classes
class Question {
    constructor(name, message) {
        this.name = name,
            this.message = message
    }
}

class InputQuestion extends Question {
    constructor(name, message) {
        super(name, message)
        this.type = "input"
    }
}

class ListQuestion extends Question {
    constructor(name, message, choices) {
        super(name, message)
        this.type = "list"
        this.choices = choices
    }
}

// question arrays for inquirer prompt--each array 
const menuQuestion = [new ListQuestion("choice", "What would you like to do?", ["View Departments", "View Roles", "View Employees",
    "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"])];

const addDepartmentQuestions = [new InputQuestion("name", "What is the new dpartment name?")];

const addRoleQuestions = [new InputQuestion("title", "What will be the title of the new role?"), new InputQuestion("salary", "What is the salary amount?"),
new InputQuestion("dept_id", "Enter the department ID:")];

const addEmployeeQuestions = [new InputQuestion("What is the employee's first name?"), new InputQuestion("What is the employee's last name?"),
new InputQuestion("role_id", "Enter the employee's role:")];

const updateEmployeeQuestions = [new InputQuestion("id", "Enter the employee's id:"), new InputQuestion("role_id", "Enter the new role id:")]
module.exports = {
    menuQuestion,
    addDepartmentQuestions,
    addRoleQuestions,
    addEmployeeQuestions,
    updateEmployeeQuestions
}
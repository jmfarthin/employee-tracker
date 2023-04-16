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

const addDepartmentQuestions = [new InputQuestion("department_name", "What will be the new department?")];

const addRoleQuestions = [new InputQuestion("title", "What will be the title of the new role?"), new InputQuestion("salary", "What is the salary amount?"),
new ListQuestion("dept_id", "Select the department:", [1, 2, 3, 4, 5, 6])];

const addEmployeeQuestions = [new InputQuestion("What is the employee's first name?"), new InputQuestion("What is the employee's last name?"),
new ListQuestion("role_id", "Select the employee's role:", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])];

const updateEmployeeQuestions = [new InputQuestion("id", "Enter the employee's id:"), new InputQuestion("role_id", "Enter the new role id:")]
module.exports = {
    menuQuestion,
    addDepartmentQuestions,
    addRoleQuestions,
    addEmployeeQuestions,
    updateEmployeeQuestions
}
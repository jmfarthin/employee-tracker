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
const menuQuestion = [new ListQuestion("choice", "What would you like to do?", ["Add Department", "View Department", "Exit"])]
const addDepartmentQuestions = [new InputQuestion("department_name", "What will be the new department?")]
const addRoleQuestions = [new InputQuestion("title", "What will be the new role title?"), new InputQuestion("salary", "What will be the role salary in numbers?")]

module.exports = {
    menuQuestion,
    addDepartmentQuestions,
    addRoleQuestions,

}
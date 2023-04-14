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


const addDepartmentQuestions =  [new InputQuestion("department_name", "What will be the new department?")]

module.exports = {
    addDepartmentQuestions,
    addRoleQuestions: [
        new InputQuestion("title", "What will be the new role title?"),
        new InputQuestion("salary", "What will be the role salary in numbers?")
    ],
    menuQuestion: [new ListQuestion("choice", "What would you like to", ["Add Department", "View Department", "Exit"])]
}
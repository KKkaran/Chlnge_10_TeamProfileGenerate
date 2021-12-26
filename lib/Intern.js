const Employee = require("./Employee")

class Intern extends Employee{

    static interns = []

    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        Intern.interns.push({
            name: this.name,
            id:this.id,
            email: this.email,
            school : this.school
        })

    }
    static showInterns(){
        return Intern.interns
    }
}

module.exports = Intern
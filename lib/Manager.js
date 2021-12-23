const Employee = require("./Employee");

class Manager extends Employee{

    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;

    }

    getManager(){
        const manager = {
            name : this.name,
            id : this.id,
            email: this.email,
            officeNumber : this.officeNumber
        }
        return manager;
    }
}

module.exports = Manager
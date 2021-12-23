const Employee = require("./Employee")

class Engineer extends Employee{
    
    static engineers = []

    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        Engineer.engineers.push({
            name: this.name,
            id:this.id,
            email: this.email,
            github : this.github
        })
        
    }
    static showEngineers(){
        console.log(Engineer.engineers)
    }
}

module.exports = Engineer
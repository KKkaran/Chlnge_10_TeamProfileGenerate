const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const { engine } = require("express/lib/application")


const askManagerData = ()=>{

    return inquirer.prompt([
        {
            type:"input",
            name: "managerName",
            message:"Type the Team Manager's Name: (Required)",
            validate: (data)=>{
                if(data) return true
                else {
                    console.log("Please Enter the Team Manager's Name:")
                }
            }
        },
        {
            type:"number",
            name: "managerId",
            message:"Type the Team Manager's Id: (Required)",
            validate: (data)=>{
                if(data) return true
                else {
                    console.log("Please Enter the Team Manager's Id:")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please provide Team Manager's Email: (Required)",
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email:")
                    return false;
                }  
            }
        },
        {
            type: "number",
            name: "officeNumber",
            message: "Please provide Team Manager's Office Number: (Required)",
            validate: function (officeNumber) {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter the Office Number:")
                    return false;
                }  
            } 
        }
    ])
    .then(answers =>{
        const m1 = new Manager(answers.managerName,answers.managerId,answers.email,answers.officeNumber)
        const data = {
            manager:m1.getManager()
        }
        return data 
    })
}
const askEngineerData = (obj)=>{
    //console.log(obj)
    return inquirer.prompt([
        {
            type:"input",
            name: "EngineerName",
            message:"Type the Engineer's Name: (Required)",
            validate: (data)=>{
                if(data) return true
                else {
                    console.log("Please Enter the Engineer's Name:")
                }
            }
        },
        {
            type:"number",
            name: "EngineerId",
            message:"Type the Engineer's Id: (Required)",
            validate: (data)=>{
                if(data) return true
                else {
                    console.log("Please Enter the Engineer's Id:")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please provide Engineer's Email: (Required)",
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email:")
                    return false;
                }  
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please provide Engineer's Github username: (Required)",
            validate: function (github) {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter the github name:")
                    return false;
                }  
            } 
        }
    ])
    .then(answers=>{
        const e1 = new Engineer(answers.EngineerName,answers.EngineerId,answers.email,answers.github)
        obj.engineers = Engineer.engineers
        return obj
    })
}
const askInternData = ()=>{
    console.log("intern data asking")
}
const showOptions = (obj)=>{
    console.log(obj)
    return inquirer.prompt([
        {
            type: "number",
            name: "option",
            message : "Pick an Option: \n 1. Add Engineer\n 2. Add Intern \n 3.Finish Team Building \n",
            validate: (input)=>{
                if(input) return true
                else return false
            }
        }
    ]).then(answers =>{
        if(answers.option === 1) {
            askEngineerData(obj)
            .then(object=>{
                console.log(object)
            })
        }//add engineer
        else if(answers.option === 2){
            askInternData()
        } //add intern
        else if(answers.option === 3) {}//finsih the process write to the file
        else {
            console.log("Invalid Input\n")//start the process again
            showOptions();
        }
    })
}





askManagerData()
        .then(showOptions)
        














// const e1 = new Engineer("karan",23,"email1","kkkaran")
// const e2 = new Engineer("tim",53,"email2","poyio")
// const e3 = new Engineer("Anthony",63,"email3","demiop")


// console.log(Engineer.engineers)
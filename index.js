const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const createHtmlTemplate = require("./src/htmlTemplate")
const fs = require("fs")

//manager inputs are asked below
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
//engineer inputs are asked below
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
//intern inputs are asked below
const askInternData = (obj)=>{
    
    return inquirer.prompt([
        {
            type:"input",
            name: "InternName",
            message:"Type the Intern's Name: (Required)",
            validate: (data)=>{
                if(data) return true
                else {
                    console.log("Please Enter the Intern's Name:")
                }
            }
        },
        {
            type:"number",
            name: "InternId",
            message:"Type the Intern's Id: (Required)",
            validate: (data)=>{
                if(data) return true
                else {
                    console.log("Please Enter the Intern's Id:")
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please provide Intern's Email: (Required)",
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
            name: "school",
            message: "Please provide Interns's School Name: (Required)",
            validate: function (school) {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the School Name:")
                    return false;
                }  
            } 
        }
    ])
    .then(answers=>{
        const i1 = new Intern(answers.InternName,answers.InternId,answers.email,answers.school)
        obj.interns = Intern.interns
        return obj
    })
}
//the user is presented with the options
const showOptions = (obj)=>{
    //console.log(obj)
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
                //console.log(object)
                showOptions(object)
            })
        }
        else if(answers.option === 2){
            askInternData(obj)
            .then(object=>{
                //console.log(object)
                showOptions(object)
            })
        }
        else if(answers.option === 3) {
            console.log("final Data:")
            console.log(obj)
            const htmlData = createHtmlTemplate(obj) //will return me the html stuff
            fs.writeFile("./dist/index.html", htmlData, err => {
                if (err) throw new Error(err);
                console.log('Page created! Check out index.html in this directory to see it!');
              });



            // the html stuff will be written into index.html using fs here

        }
        else {
            console.log("Invalid Input\n")//start the process again
            showOptions();
        }
    })
}
//main call and send sent to process the inputs
askManagerData().then(showOptions)
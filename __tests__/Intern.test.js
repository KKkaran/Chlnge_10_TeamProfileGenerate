const Intern = require("../lib/Intern")

describe("Intern Class",()=>{

    it("testing intern object creation with a name, id, email and school",()=>{
        const intern = new Intern("Karan",12,"karansingh@gmail.com","Sheridan");

        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
      })


    it("give the list of intern array",()=>{
        const intern = new Intern("Karan",12,"karansingh@gmail.com","Sheridan");

        const arr = Intern.showInterns()
        arr.forEach(f=>{
            expect(f.name).toEqual(expect.any(String));
            expect(f.id).toEqual(expect.any(Number));
            expect(f.email).toEqual(expect.any(String));
            expect(f.school).toEqual(expect.any(String))
        })

    })
})
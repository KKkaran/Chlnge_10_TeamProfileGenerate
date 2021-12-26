const Engineer = require("../lib/Engineer")

describe("Engineer Class",()=>{

    it("testing intern object creation with a name, id, email and school",()=>{
        const engineer = new Engineer("Karan",12,"karansingh@gmail.com","kkkaran");

        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));
      })


    it("give the list of intern array",()=>{
        const engineer = new Engineer("Karan",12,"karansingh@gmail.com","kkkaran");

        const arr = Engineer.showEngineers()
        arr.forEach(f=>{
            expect(f.name).toEqual(expect.any(String));
            expect(f.id).toEqual(expect.any(Number));
            expect(f.email).toEqual(expect.any(String));
            expect(f.github).toEqual(expect.any(String))
        })

    })
})
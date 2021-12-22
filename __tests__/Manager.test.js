const Manager = require("../lib/Manager")

describe('creates a manager object', () => {
    
      it("manager object creation testing",()=>{
        const manager = new Manager("Karan",12,"karansingh@gmail.com",45);

        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
      })
    
  });
